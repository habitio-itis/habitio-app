/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 2:31 AM
 */
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Screens } from "@Constants/Screens";
import { Input } from "@Components/ui/Input";
import { OAuthButton } from "@Components/ui/OAuthButton";
import { BackButton } from "@Components/ui/BackButton";
import { LocalSvg } from "react-native-svg";
import { FONTS } from "@Constants/Styles";
import { AppButton } from "@Components/ui/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = ({ navigation }) => {
	const [login, setLogin] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, registerHandler } = useContext(AuthContext);

	useEffect(() => {
		if (user) {
			navigation.navigate(Screens.HOME);
			return;
		}
	}, [user]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAwareScrollView>
				<View style={styles.container}>
					<View style={styles.background}>
						<View style={styles.rightArch}>
							<LocalSvg asset={require("../assets/images/RightArch.svg")} />
						</View>
						<View style={styles.leftArch}>
							<LocalSvg asset={require("../assets/images/LeftArch.svg")} />
						</View>
					</View>
					<BackButton onPress={() => navigation.goBack()} style={styles.backButton} />
					<Text style={styles.title}>Create your account</Text>
					<OAuthButton
						theme="facebook"
						buttonStyle={styles.facebookButton}
						onPress={() => {}}
					/>
					<OAuthButton theme="google" buttonStyle={styles.googleButton} onPress={() => {}} />
					<Text style={styles.login}>OR LOG IN WITH EMAIL</Text>
					<View style={styles.fields}>
						<Input
							type="text"
							value={login}
							onChangeText={setLogin}
							style={styles.input}
							placeholder="Login"
						/>
						<Input
							type="email"
							value={email}
							onChangeText={setEmail}
							style={styles.input}
							placeholder="Email address"
						/>
						<Input
							type="password"
							value={password}
							onChangeText={setPassword}
							style={styles.input}
							placeholder="Password"
						/>
					</View>
					<AppButton
						style={styles.getStratedButton}
						text="GET STARTED"
						onPress={() => registerHandler(login, email, password)}
					/>
					<View style={styles.signUn}>
						<Text>ALREADY HAVE AN ACCOUNT?</Text>
						<AppButton
							theme="link"
							text=" SIGN IN"
							onPress={() => navigation.navigate(Screens.LOGIN)}
						/>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "white",
	},
	leftArch: {
		position: "absolute",
		right: 0,
		top: -35,
	},
	rightArch: {
		position: "absolute",
		left: 0,
		top: -35,
	},
	background: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		paddingHorizontal: 20,
	},
	backButton: {
		marginTop: 19,
		alignSelf: "flex-start",
	},
	title: {
		marginTop: 30,
		fontFamily: "Rubik",
		fontSize: 28,
		lineHeight: 38,
		fontWeight: "700",
		color: "#3F414E",
	},
	facebookButton: {
		marginTop: 33,
	},
	googleButton: {
		marginTop: 20,
	},
	login: {
		marginTop: 40,
		fontFamily: "Rubik",
		...FONTS.h4,
	},
	fields: {
		display: "flex",
		marginTop: 20,
	},
	input: {
		marginTop: 20,
	},
	getStratedButton: {
		marginTop: 30,
	},
	signUn: {
		...FONTS.h4,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		display: "flex",
		flexDirection: "row",
	},
});

export default RegisterScreen;
