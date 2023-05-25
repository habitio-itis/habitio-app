import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CalendarWeekRow = () => {
	// Get current date
	const currentDate = new Date();

	// Get the day number of the current date (0-6, where 0 is Sunday)
	const currentDay = currentDate.getDay();

	// Create an array of day names
	const daysOfWeek = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	// Generate an array of 7 days starting from the current date
	const weekDays = Array.from({ length: 7 }, (_, index) => {
		const day = new Date();
		day.setDate(currentDate.getDate() - currentDay + index);
		return day;
	});

	return (
		<View style={styles.container}>
			{weekDays.map((day, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.dayButton,
						index === currentDay && styles.currentDayButton,
					]}
					onPress={() => console.log("Pressed on", day)}
				>

					<Text
						style={[
							styles.weekDayText,
							index === currentDay && styles.currentWeekDayText,
						]}
					>
						{daysOfWeek[day.getDay()]}
					</Text>
					<Text
						style={[
							styles.dayText,
							index === currentDay && styles.currentDayText,
						]}
					>
						{day.getDate()}
					</Text>
				</TouchableOpacity>
			))}
			<TouchableOpacity style={styles.scrollButton}>
				<Feather name="chevrons-right" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 27,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	dayButton: {
		flex: 1,
		alignItems: "center",
		borderRadius: 14,
		paddingVertical: 10,
	},
	currentDayButton: {
		backgroundColor: "#7472FF",
	},
	dayText: {
		fontFamily: "Rubik",
		fontSize: 20,
		lineHeight: 24,
		fontWeight: "400",
		color: "white",
	},
	currentDayText: {
		fontWeight: "500",
	},
	weekDayText: {
		fontSize: 12,
		ontFamily: "Rubik",
		fontWeight: "400",
		lineHeight: 14,
		color: "white",
	},
	currentWeekDayText: {
		fontWeight: "500",
	},
	scrollButton: {
		marginLeft: 10,
	},
});

export default CalendarWeekRow;
