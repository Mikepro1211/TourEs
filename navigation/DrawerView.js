import { StyleSheet,  View, Image, Touchable , Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../components/colors'
import  {getAuth, signOut} from 'firebase/auth';
import Login from '../screens/Login';


export default function DrawerView(props ){
   const  {navigation} = props;
    const auth = getAuth();
    const user = auth.currentUser;
    const [screen, setScreen] = useState("login");

    const handlerSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("Sesion cerrada correctamente"  );
          navigation.navigate('login');
        }).catch((error) => {
          // An error happened.
        });
      }
    
    
   
    let displayName = '';
    let email = '';


    if(user != null){
        console.log("Usuario logueado: "+user.email);
        displayName = user.displayName; // Asigna el valor de user.displayName a displayName
        email = user.email; // Asigna el valor de user.email a email
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
    }
    
    
    return(
        
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>

             {/**Apartado para informacion de login */}
             <Text>Perfil : {displayName}</Text>
             <Text>Email: {email}</Text>
            </View>
           
           


            <DrawerItemList {...props}/>

            <TouchableOpacity onPress={handlerSignOut}>
                <Text>Cerrar Session</Text>
            </TouchableOpacity>


        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    circleImage:{
        width: 150,
        height: 150,
        marginLeft: 50,
        marginTop:25,
        marginBottom: 20,

    },

    container: {
        justifyContent: 'center',
        height: "auto",
        marginTop:10,


    },
    drawerHead:{
        backgroundColor: colors.blanquito,

        height:'100%',
    },
})
