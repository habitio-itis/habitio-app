/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 1:58 AM
 */
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Screens } from "@Constants/Screens";

const HomeScreen = ({ navigation }) => {
	const { user, logoutHandler } = useContext(AuthContext);

	if (!user) {
		navigation.navigate(Screens.REGISTER);
		return;
	}

	return (
		<View>
			<Text>Home Screen</Text>
			<Text>Phone: {user.phone}</Text>
			<Button title="Logout" onPress={() => logoutHandler(user.token)} />
		</View>
	);
};

export default HomeScreen;