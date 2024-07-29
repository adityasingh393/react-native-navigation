import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../redux/slice.ts/authslice';
import { RootState } from '../redux/store';
import Signup from '../screens/ScreenSingup/Signup';
import Login from '../screens/ScreenLogin/Login';
import Home from '../screens/ScreenHome/Home';

const Stack = createStackNavigator();

const Routes = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isAuthenticated ? "Home" : "Singup"}>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
