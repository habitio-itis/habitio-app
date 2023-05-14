/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 9:50 AM
 */
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS } from "@Constants/Styles";
import { CustomBigButton } from "@Components/ui/CustomBigButton";

const GetStartScreen = () => {
	const handlePress = () => {
		// setTimeout(() => {
		// 	navigation.navigate(Screens.REGISTER);
		// }, 5000); // ждем 3 секунды
		Alert.alert("Button pressed");
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
			<View>
				<View>
					<Image source={require("../assets/images/GetStartPerson.svg")} />
				</View>
				<View>
					<CustomBigButton onPress={handlePress} text="GET STARTED" />
				</View>
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
});

export default GetStartScreen;