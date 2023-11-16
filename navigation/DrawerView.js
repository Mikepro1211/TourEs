import { StyleSheet,  View, Image, Touchable , Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../components/colors'

export default function DrawerView(props){
    return(
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerHead}>
            <View style={styles.container}>

             {/**Apartado para informacion de login */}
            </View>

            <DrawerItemList {...props}/>

            <TouchableOpacity>
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
