/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 2:02 AM
 */
import React, { useContext, useState } from "react";
import { Button, View } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Screens } from "@Constants/Screens";
import { PhoneInput } from "@Components/ui/PhoneInput";
import { PasswordInput } from "@Components/ui/PasswordInput";

const LoginScreen = ({ navigation }) => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const { user, loginHandler } = useContext(AuthContext);

	if (user) {
		navigation.navigate(Screens.HOME);
		return;
	}

	return (
		<View>
			<PhoneInput
				value={phone}
				onChangeText={setPhone}
			/>
			<PasswordInput
				value={password}
				onChangeText={setPassword}
			/>
			<Button title="Login" onPress={() => loginHandler(phone, password)} />
			<Button title="Register" onPress={() => navigation.navigate(Screens.REGISTER)} />
		</View>
	);
};

export default LoginScreen;


