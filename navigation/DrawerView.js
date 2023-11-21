import { StyleSheet,  View, Image, Touchable, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../components/colors'
import  {getAuth, signOut} from 'firebase/auth';



export default function DrawerView(props ){
   const  {navigation} = props;
    const auth = getAuth();
    const user = auth.currentUser;
  //const/funcion para cerrar sesion
    const handlerSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
          console.log("Sesion cerrada correctamente"  );
          navigation.navigate('StartScreen');
        }).catch((error) => {
          // An error happened.
        });
      }
    
    
   
    let displayName = '';
    let email = '';
    let photoURL = '';


    if(user != null){
        console.log("Usuario logueado: "+user.email);
        displayName = user.displayName; 
        email = user.email; 
        photoURL = user.photoURL;
       
    }
    
    
    return(
        
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>

             {/**Apartado para informacion de login */}
             <Image style={styles.Photoprofile}source={{uri: photoURL}}/>
             <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>{displayName}</Text>
            </View>
           
           


            <DrawerItemList {...props}/>

            <TouchableOpacity  style={styles.botonazo}onPress={handlerSignOut}>
                <Text style={styles.textBoton}>Cerrar Session</Text>
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
    Photoprofile:{
        width: '50%',
        height: 150,
        borderRadius: 50,
        alignSelf: 'center',
        marginBottom: 20,
    },

    botonazo:{
        backgroundColor: colors.primary700,
        padding:10,
        borderRadius:100,
        width:'60%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:100,
    },
    textBoton:{
      color: 'white',
      textAlign:'center',
      fontSize:18,
    },
    
})
