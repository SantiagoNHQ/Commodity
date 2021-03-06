import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//screens
import HomeScreen from './screens/home';
import Cotizacion from './screens/cotizacion';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './redux/reducers';


const store = createStore(Reducer);


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false, drawerType: 'slide',}}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cotizacion periodos" component={Cotizacion} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
