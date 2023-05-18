/**
 * @author: CHIKIRIAY
 * @created: 5/17/23
 * @Time: 11:51 PM
 */
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { LocalSvg } from "react-native-svg";
import { TimePickerWithButton } from "@Components/ui/TimePickerWithButton";
import { Screens } from "@Constants/Screens";

export const NightSelectionScreen = ({ navigation }) => {
	const [hour, setHour] = useState();
	const [minute, setMinute] = useState();
	const [period, setPeriod] = useState();

	const onPressHandler = () => {
		Alert.alert("Time:", `Hours: ${hour}, Minutes: ${minute}, Period: ${period}`);
		//todo save
		navigation.navigate(Screens.NIGHT_SELECTION);
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.text}>When do you want to reflect on your day</Text>
			</View>
			<View style={styles.imageButtonContainer}>
				<LocalSvg
					style={styles.image}
					asset={require("../../assets/images/NightSelectionMoon.svg")}
				/>
				<View style={styles.timePickerContainer}>
					<TimePickerWithButton
						setHour={setHour}
						setMinute={setMinute}
						setPeriod={setPeriod}
						onPress={onPressHandler}
						text={"GET STARTED"}
					/>
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
		backgroundColor: "#4D57C8",
	},
	headerContainer: {
		position: "absolute",
		top: 80,
		marginTop: 60,
		zIndex: 2,
		width: 350,
		height: 82,
	},
	text: {
		fontFamily: "Rubik-Bold",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 30,
		lineHeight: 41,
		textAlign: "center",
		alignSelf: "center",
		letterSpacing: 0.03,
		color: "#FFECCC",
	},
	imageButtonContainer: {
		width: "100%",
		position: "absolute",
		bottom: 0,
		flex: 1,
		flexDirection: "row",
	},
	image: {
		position: "absolute",
		bottom: 110,
	},
	timePickerContainer: {
		backgroundColor: "#3E4ACA",
		height: 350,
		width: "100%",
	},
});
