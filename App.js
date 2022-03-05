import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ImageScreen from './screens/Image';
import HomeScreen from './screens/Home';
import MarsScreen from './screens/Mars';
import EarthScreen from './screens/Earth';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
         <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
       
        <Stack.Screen name="Mars" component={MarsScreen} />
        <Stack.Screen name="Earth" component={EarthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
