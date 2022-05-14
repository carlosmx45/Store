import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Esto se supone que es una tienda" component={HomeScreen}/>
        <Stack.Screen name="Tasks" component={MenuScreen} options={{title: "Tasks"}} />
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Tarea"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
