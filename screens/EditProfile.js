import React from 'react'
import{Text  , View , StyleSheet} from 'react-native'

export default function EditProfile() {
  return (
   <View style={style.container}>
    <Text style={style.title}>User Information</Text>
   </View>
  )
}


const style =  StyleSheet.create({
    container:{
        display:'flex',
        direction:'column',
        flex:1,
        
        alignItems:'center'
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:23,
        marginBottom:40,
        color:'#000000'
    },
})