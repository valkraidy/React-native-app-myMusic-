import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';

// import Location from './screens/Location';
// import Stack from './routes/Stack'
//  import SignIn from './screens/SignIn';
//  import Welcome from './screens/Welcome';
// import SignUP from './screens/SignUp'
// import SelectLocation from './screens/SelectLocation'


export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
       
       {/* <SignIn/> */}
      {/* <SignUP/> */}
      {/* <SelectLocation/> */}
      {/* <Stack/> */}
      {/* <Location/> */}
      <Home/>
      
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
