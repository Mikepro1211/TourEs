import { OnboardFlow } from "react-native-onboard";
import { StyleSheet, Text, View , Image } from 'react-native';
import color from '../components/colors';
export default function Onboarding() {
  return( 
    
    <OnboardFlow 
  pages={[
    
      {
        title: 'Hoteles',
        titleStyle: { color: color.primary },
        subtitle: 'Hoteles donde te puedes ospedar', 
        imageUri :'https://static-00.iconduck.com/assets.00/hotel-icon-512x502-mrt9mc3z.png'        
      },
      {
        title: 'Parques',
        subtitle: 'Maravillosos parques para visitar',
        imageUri: 'https://cdn-icons-png.flaticon.com/512/2203/2203973.png'
      },
      {
        title: 'Lugares Turisticos',
        subtitle: 'Asombrosos lugares para visitar',
        imageUri : 'https://cdn-icons-png.flaticon.com/512/5965/5965689.png'
        
      },
    ]} type={'fullscreen'}
    />
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});