import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { UniversalInput } from './src/components/ui/text-field/text-field';
import {UniversalButton} from './src/components/ui/button/button'
import { useState } from 'react';
import { Apwp } from './src/components/ui/date-input/date-input';
import { Constants } from 'expo';
export default function App() {
  const [date, setDate] = useState(new Date())
// npx expo start
  return (
    <View style={styles.container}>
      <Text style={styles.a}>Бя</Text>
          <UniversalInput/>
     <View style={stylese.container}>
     <Button title="Yea" containerViewStyle={{width: '100%', marginLeft: 0}}/>
     <Text style={stylesw.but}>wdwdwdwddw</Text>
     </View>
    </View>
  );
}

export const stylesw = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  but:{
    padding: 300,
    width: '100%',
    backgroundColor: 'pink',
    alignSelf: 'stretch'
  }
});

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  a: {
    color: 'red'
  }
});

const stylese = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
});