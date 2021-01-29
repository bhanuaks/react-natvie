/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  const Stack = createStackNavigator();
  return (
    
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
              <Stack.Screen name="Detials" component={DetailsScreen}></Stack.Screen>
              </Stack.Navigator>
              </NavigationContainer>
    
  );
};

function HomeScreen({navigation}){
  let data = {name:"bhanu", email:"bhanu@gmail.com", address:"noida"}
  return(
    <View>
      <Text>
        Home Screen
      </Text>
      <Button title="go to Details" onPress={()=>navigation.push('Detials', data)}></Button>
    </View>
  )
}

function DetailsScreen({route}){
    let data = route.params;

  return(
    <View>
      <Text style={{fontSize:30}}>
      {data.name}
      </Text>
      <Text style={{fontSize:30}}>
      {data.email}
      </Text>
      <Text style={{fontSize:30}}>
      {data.address}
      </Text>
    </View>
  )
}

export default App;
