/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 2:04 AM
 */
import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Screens } from "@Constants/Screens";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import StartScreen from "../screens/StartScreen";

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
	// const { user } = useAuth();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={Screens.START} component={StartScreen} />
				<Stack.Screen name={Screens.REGISTER} component={RegisterScreen} />
				<Stack.Screen name={Screens.HOME} component={HomeScreen} />
				<Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
