/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 9:50 AM
 */
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { FONTS } from "@Constants/Styles";
import { LocalSvg } from "react-native-svg";
import { CustomBigButton } from "@Components/ui/CustomBigButton";
import { Screens } from "@Constants/Screens";
import { isAuthorized } from "../providers/AuthProvider";

const GetStartScreen = ({ navigation }) => {
	const handlePress = async () => {
		const auth = await isAuthorized();
		if (auth) {
			navigation.navigate(Screens.HOME);
		} else {
			navigation.navigate(Screens.REGISTER);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>H A B I T I O</Text>
			</View>
			<View style={styles.headerContainer}>
				<Text style={styles.h1}>Hi there, Welcome</Text>
				<Text style={styles.h2}>to Main Habits</Text>
			</View>
			<View style={styles.descriptionContainer}>
				<Text style={styles.description}>
					Explore the app, Find some peace of mind to achive good habits.
				</Text>
			</View>
			<View style={styles.imageContainer}>
				<LocalSvg asset={require("../assets/images/GetStartPerson.svg")} />
			</View>
			<View style={styles.buttonContainer}>
				<CustomBigButton
					onPress={handlePress}
					text="GET STARTED"
					buttonStyle={styles.button}
					textStyle={styles.buttonText}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		height: "100%",
		backgroundColor: "#8C96FF",
	},
	titleContainer: {
		margin: 5,
		marginTop: "20%",
		padding: 5,
	},
	headerContainer: {
		marginTop: 60,
	},
	imageContainer: {
		bottom: 0,
	},
	buttonContainer: {
		position: "absolute",
		zIndex: 2,
		bottom: 75,
		width: "100%",
		alignItems: "center",
		height: 65,
	},
	title: {
		...FONTS.habitIoH1,
	},
	h1: {
		fontFamily: "Rubik",
		fontStyle: "normal",
		fontSize: 30,
		fontWeight: "bold",
		lineHeight: 41,
		textAlign: "center",
		letterSpacing: 1.5,
		color: "#FFECCC",
	},
	h2: {
		fontFamily: "Rubik",
		fontStyle: "italic",
		fontSize: 30,
		lineHeight: 41,
		textAlign: "center",
		letterSpacing: 1,
		color: "#FFECCC",
	},
	descriptionContainer: {
		marginTop: 20,
		width: 317,
	},
	description: {
		fontFamily: "Rubik",
		fontSize: 16,
		lineHeight: 27,
		textAlign: "center",
		color: "#EBEAEC",
	},
	button: { backgroundColor: "#EBEAEC", borderRadius: 38 },
	buttonText: {
		color: "#3F414E",
		fontSize: 15,
	},
});
export default GetStartScreen;