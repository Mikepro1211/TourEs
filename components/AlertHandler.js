import AlertPro from "react-native-alert-pro";

let alertPro;

export function showAlert(type, title, message) {
  if (alertPro) {
    alertPro.open({
      title,
      message,
      textConfirm: "OK",
      customStyles: {
        mask: {
          backgroundColor: "transparent"
        },
        container: {
          borderWidth: 1,
          borderColor: type === 'success' ? 'green' : 'red',
          shadowColor: type === 'success' ? 'green' : 'red',
        },
        buttonConfirm: {
          backgroundColor: type === 'success' ? 'green' : 'red',
        }
      },
    });
  }
}

export function AlertHandler() {
  return (
    <AlertPro
      ref={ref => {
        alertPro = ref;
      }}
      textConfirm="OK"
      showCancel={false}
      onConfirm={() => alertPro.close()}
    />
  );
}