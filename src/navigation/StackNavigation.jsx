import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllTeamsScreen from '../screen/AllTeamsScreen'
import AllPlayersScreen from '../screen/AllPlayersScreen';

const NavigationStack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationStack.Navigator>
            <NavigationStack.Screen
                name="AllPlayersScreen"
                component={AllPlayersScreen}
                options={{ title: 'Kings League' }}
            />
            <NavigationStack.Screen
                name="AllTeamsScreen"
                component={AllTeamsScreen}
                options={{ title: 'Kings League' }}
            />
        </NavigationStack.Navigator>
    )
}