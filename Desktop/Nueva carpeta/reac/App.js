import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import HelloWorldScreen from './src/presentacion/screens/HelloWorldScreen';
import CounterScreen from './src/presentacion/screens/CounterScreen';

const image = require('./assets/icon.png'); // Esta línea está bien si deseas usar una imagen local


export default function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      {/*<HelloWorldScreen name =',juan carlos jaimes suarez '></HelloWorldScreen>*/}
      <CounterScreen></CounterScreen>
    </SafeAreaView>
    
  )
}
/*export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://lain.wiki/images/thumb/2/21/Lain%27s_navi_layer_03.jpeg/300px-Lain%27s_navi_layer_03.jpeg' }} // Corregido: usa un objeto con 'uri'
        style={{
          width: 200, 
          height: 200,
          borderRadius: 30
        }} 
      />
      <Text>hola mundo</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/