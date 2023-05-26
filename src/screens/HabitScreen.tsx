import { RectangleBackButton } from "@Components/ui/RectangleBackButton";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { padding } from "../utils/padding";
import { Habit } from "@Services/habits.service";
import * as HabitService from "@Services/habits.service";
import { useEffect, useState } from "react";
import { Input } from "@Components/ui/Input";
import { AppButton } from "@Components/ui/Button";

export const HabitScreen = ({ route: { id }, navigation }) => {
	const [habit, setHabit] = useState<Habit | null>(null);

	// useEffect(() => {
	// 	const getHabit = async () => {
	// 		const habit = await HabitService.getHabitById(id);
	// 		setHabit(habit);
	// 	};
	// 	getHabit();
	// }, [id]);

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<RectangleBackButton onPress={() => navigation.goBack()} />
				</View>
				<View style={styles.body}>
					<Text style={styles.text}>YOUR</Text>
					<Text style={styles.text}>PROGRESS</Text>
					<Text style={styles.progress}>{habit?.progress || "50%" }</Text>
				</View>
				<View style={styles.complete}>
					<Input
					 	onChangeText={() => {}}
						placeholder="Введите объем выполненной вами работы"
					/>
					<AppButton
						style={styles.button}
						onPress={() => {}}
						text="Увеличить прогресс"
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#4D57C8",
	},
	container: {	
		...padding(0, 13),
	},
	header: {
		marginTop: 45,
	},
	body: {
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontFamily: "Rubik",
		fontSize: 50,
		lineHeight: 76,
		fontWeight: "400",
		color: "white",
	},
	progress: {
		fontFamily: "Rubik",
		fontSize: 60,
		lineHeight: 80,
		fontWeight: "500",
		color: "white",
	},
	complete: {
		marginTop: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginTop: 20,
	}
});
