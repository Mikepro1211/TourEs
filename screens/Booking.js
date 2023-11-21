import React from 'react'
import { View , Text} from 'react-native'

export default function Booking({navigation , route}) {
  const data = route.params?.data;

  return (
   <View>
    {data ? <Text>{JSON.stringify(data, null, 2)}</Text> : <Text>No data</Text>}
   </View>
  )
}