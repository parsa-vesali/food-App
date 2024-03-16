import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import WellcomeScreen from '../../Screens/WellcomeScreen'
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Wellcome' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Wellcome" component={WellcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation