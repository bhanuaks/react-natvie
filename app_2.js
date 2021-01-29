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
  return(
    <View>
      <Text>
        Home Screen
      </Text>
      <Button title="go to Details" onPress={()=>navigation.navigate('Detials')}></Button>
    </View>
  )
}

function DetailsScreen(){
  return(
    <View>
      <Text>
      Details Screen
      </Text>
    </View>
  )
}

export default App;
