import React from 'react'
import { TouchableOpacity , Text , StyleSheet} from 'react-native'
import colors from './colors'

export default function Button({title ,onpress}) {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary700,
        padding:10,
        borderRadius:100,
        width:'100%',
        height:50,
    },
    text:{
        color: 'white',
        textAlign:'center',
        fontSize:18,
    }
})