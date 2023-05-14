/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 2:31 AM
 */
import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Screens } from "@Constants/Screens";
import { PhoneInput } from "@Components/ui/PhoneInput";
import { PasswordInput } from "@Components/ui/PasswordInput";
import { OAuthButton } from "@Components/ui/OAuthButton";

const RegisterScreen = ({ navigation }) => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const { user, registerHandler } = useContext(AuthContext);

	if (user) {
		navigation.navigate(Screens.HOME);
		return;
	}

	return (
		<View style={styles.container}>
			<OAuthButton theme="facebook" />
			<OAuthButton theme="google" />
			<Text style={styles.title}>Create your account</Text>
			<PhoneInput value={phone} onChangeText={setPhone} />
			<PasswordInput value={password} onChangeText={setPassword} />
			<Button title="Register" onPress={() => registerHandler(phone, password)} />
			<Button title="Login" onPress={() => navigation.navigate(Screens.LOGIN)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: "25%",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
});

export default RegisterScreen;
