/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 7:29 PM
 */
import { StyleSheet, Text, View } from "react-native";
import { LocalSvg } from "react-native-svg";
import React from "react";
import { ButtonAfterRegister } from "@Components/ui/ButtonAfterRegister";
import { Screens } from "@Constants/Screens";
import { FONTS } from "@Constants/Styles";

export const TrackYourGoalScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<LocalSvg asset={require("../assets/images/TrackYourGoalScreenAfterRegister.svg")} />
			</View>
			<View style={styles.textsContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Track Your Goal</Text>
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.description}>
						Don't worry if you have trouble determining your goals, We can help you determine
						your goals and track your goals
					</Text>
				</View>
			</View>
			<ButtonAfterRegister screen={Screens.TRACK_YOUR_GOAL} navigation={navigation} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		flex: 1,
	},
	imageContainer: {
		top: 0,
		width: "100%",
	},
	title: {
		...FONTS.h2,
	},
	description: {
		...FONTS.body4,
		color: "#7B6F72",
	},
	textsContainer: {
		width: 315,
		height: 115,
		alignSelf: "flex-start",
		left: 30,
		top: 50,
	},
	titleContainer: {
		width: 185,
		height: 36,
	},
	descriptionContainer: {
		height: 70,
		top: 15,
	},
});
