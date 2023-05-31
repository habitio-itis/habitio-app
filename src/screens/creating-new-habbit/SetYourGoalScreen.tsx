/**
 * @author: CHIKIRIAY
 * @created: 5/27/23
 * @Time: 1:15 AM
 */
import {
	Keyboard,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import React, { useState } from "react";
import { LocalSvg } from "react-native-svg";
import { CustomBigButton } from "@Components/ui/CustomBigButton";
import { Screens } from "@Constants/Screens";

export const SetYourGoalScreen = ({ navigation }) => {
	const [weekDays, setWeekDays] = useState([
		{ id: 1, title: "M", selected: false },
		{ id: 2, title: "T", selected: false },
		{ id: 3, title: "W", selected: false },
		{ id: 4, title: "T", selected: false },
		{ id: 5, title: "F", selected: false },
		{ id: 6, title: "S", selected: false },
		{ id: 7, title: "S", selected: false },
	]);

	const [inputValue, setInputValue] = useState("0");

	const handleInput = (text: string) => {
		setInputValue(text.replace(/[^0-9,.]/g, ""));
	};

	const onPressRememberHandle = (id: number | string) => () =>
		setWeekDays(
			weekDays.map((weekDay) => {
				if (weekDay.id === id) {
					weekDay.selected = !weekDay.selected;
				}
				return weekDay;
			}),
		);

	const onPressHandle = () => {
		navigation.navigate(Screens.SET_YOUR_GOAL);
		const goal = +inputValue.replace(/[^0-9,.]/g, "").replace(",", ".");

		// todo fetch
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<View style={styles.titleTextContainer}>
					<Text style={styles.titleText}>SET YOUR GOALS</Text>
				</View>
				<View style={styles.imageContainer}>
					<LocalSvg asset={require("../../assets/images/SetYourGoalDrinkingWater.svg")} />
				</View>
				<View style={styles.setGoalInputTextContainer}>
					<View style={styles.setGoalTextContainer}>
						<Text style={styles.setGoalText}>Set your goals:</Text>
					</View>
					<View style={styles.setGoalInputContainer}>
						<TextInput
							onChangeText={handleInput}
							value={inputValue}
							style={styles.setGoalInput}
							placeholder="count"
							keyboardType="decimal-pad"
							caretHidden={true}
							enablesReturnKeyAutomatically={true}
							clearTextOnFocus={true}
						/>
						<View style={styles.setGoalInputPreviewTextContainer}>
							<Text style={styles.setGoalInputPreviewText}>Liters</Text>
						</View>
					</View>
				</View>
				<View style={styles.repeatTextContainer}>
					<Text style={styles.repeatText}>Repeat:</Text>
				</View>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={styles.swWeekDaySelectContainer}
				>
					<View style={styles.weekDaySelectContainer}>
						{weekDays.map((weekDay) => (
							<TouchableOpacity
								onPress={onPressRememberHandle(weekDay.id)}
								style={styles.miniButton}
								key={weekDay.id}
							>
								<View
									key={weekDay.id}
									style={[
										styles.weekDayContainer,
										{ backgroundColor: weekDay.selected ? "#354ab7" : "#7889DF" },
									]}
								>
									<Text key={weekDay.id} style={styles.weekDayText}>
										{weekDay.title}
									</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				<CustomBigButton
					onPress={onPressHandle}
					text={"CONTINUE"}
					buttonStyle={styles.button}
					textStyle={styles.buttonText}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#4D57C8",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	titleTextContainer: {
		top: 80,
		zIndex: 2,
		width: 350,
		height: 82,
	},
	titleText: {
		color: "#FFECCC",
		textAlign: "center",
		fontFamily: "Rubik-Bold",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 30,
		lineHeight: 41,
		letterSpacing: 0.03,
		borderRadius: 0.3,
		borderColor: "#FFECCC",
	},
	imageContainer: {
		top: 0,
		position: "absolute",
		zIndex: 0,
	},
	button: {
		alignSelf: "center",
		bottom: 70,
		position: "absolute",
		backgroundColor: "#FFFFFF",
		borderRadius: 99,
	},
	buttonText: { color: "#737373" },
	swWeekDaySelectContainer: {
		width: "100%",
		bottom: 170,
		position: "absolute",
		left: 0,
	},
	weekDaySelectContainer: {
		height: 55,
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
	},
	weekDayContainer: {
		width: 46,
		height: 46,
		borderRadius: 23,
		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 15,
	},
	weekDayText: {
		color: "#FFFFFF",
		fontFamily: "Rubik",
	},
	miniButton: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	repeatTextContainer: {
		bottom: 240,
		position: "absolute",
		left: 15,
		zIndex: 2,
		textAlign: "left",
	},
	repeatText: {
		color: "#FFECCC",
		textAlign: "center",
		fontFamily: "Rubik-Bold",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 20,
		lineHeight: 41,
		letterSpacing: 0.03,
		borderRadius: 0.3,
		borderColor: "#FFFFFF",
	},
	setGoalInputTextContainer: {
		position: "absolute",
		top: 450,
		width: "90%",
		height: 100,
		alignItems: "center",
		flex: 1,
		justifyContent: "space-between",
	},
	setGoalTextContainer: {
		top: 0,
	},
	setGoalInputContainer: {
		flexDirection: "row",
		width: "100%",
		height: 60,
		alignItems: "center",
		alignSelf: "flex-start",
		borderRadius: 10,
		backgroundColor: "#7889DF",
	},
	setGoalInputPreviewTextContainer: {
		width: "50%",
		height: "100%",
		textAlign: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	setGoalInputPreviewText: {
		color: "#E8E8E8",
		fontFamily: "Rubik",
		fontSize: 20,
		fontWeight: "600",
		letterSpacing: 0.03,
	},
	setGoalText: {
		color: "#FFFFFF",
		fontFamily: "Rubik-Bold",
		fontSize: 16,
		fontWeight: "600",
		letterSpacing: 0.03,
	},
	setGoalInput: {
		padding: 20,
		width: "50%",
		alignSelf: "flex-start",
		height: "100%",
		textAlign: "center",
		fontSize: 20,
		color: "#FFFFFF",
	},
});
