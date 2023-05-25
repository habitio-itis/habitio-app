/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 2:04 AM
 */
import React, { FC, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Screens } from "@Constants/Screens";
import StartScreen from "../screens/StartScreen";
import GetStartScreen from "../screens/GetStartScreen";
import { loadCustomFonts } from "../common/utils/LoadCustomFonts";
import { timeout } from "../common/utils/Timeout";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import LoaderScreen from "../screens/LoaderScreen";
import { TrackYourGoalScreen } from "../screens/after-auth/TrackYourGoalScreen";
import { GetBurnScreen } from "../screens/after-auth/GetBurnScreen";
import { EatWellScreen } from "../screens/after-auth/EatWellScreen";
import { MorningYogaScreen } from "../screens/after-auth/MorningYogaScreen";
import { HabitScreen } from "../screens/HabitScreen";

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
	// const { user } = useAuth();
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await loadCustomFonts();

			// Ждем 2 секунды по красоте
			await timeout(2000);
			setFontsLoaded(true);
		};
		loadFonts();
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{fontsLoaded ?
					<>
						<Stack.Screen name={Screens.START} component={StartScreen}/>
						<Stack.Screen name={Screens.GET_START} component={GetStartScreen}/>
						<Stack.Screen name={Screens.REGISTER} component={RegisterScreen}/>
						<Stack.Screen name={Screens.TRACK_YOUR_GOAL} component={TrackYourGoalScreen}/>
						<Stack.Screen name={Screens.GET_BURN} component={GetBurnScreen}/>
						<Stack.Screen name={Screens.EAT_WELL} component={EatWellScreen}/>
						<Stack.Screen name={Screens.MORNING_YOGA} component={MorningYogaScreen}/>
						<Stack.Screen name={Screens.HOME} component={HomeScreen}/>
						<Stack.Screen name={Screens.LOGIN} component={LoginScreen}/>
						<Stack.Screen name={Screens.Habit} component={HabitScreen} />
					</> : <Stack.Screen name={Screens.SPLASH} component={LoaderScreen}/>
				}
			</Stack.Navigator>
		</NavigationContainer>
	);
};
