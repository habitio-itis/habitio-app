/**
 * @author: CHIKIRIAY
 * @created: 5/23/23
 * @Time: 11:48 PM
 */
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { HabitIcon } from "@Components/ui/Icons/HabitIcon";
import { Screens } from "@Constants/Screens";

export const ChooseHabitScreen = ({ navigation }) => {
	const manyHabits = [
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 1 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 2 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 3 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 4 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 5 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 6 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 7 },
		{ url: require("../../assets/images/DrinkingWaterIcon.svg"), title: "Drinking water", id: 8 },
	].reduce(
		(previousValue, currentValue) => {
			const values = previousValue[previousValue.length - 1];
			const length = values.length;

			if (length === 2) {
				previousValue.push([currentValue]);
			} else {
				values.push(currentValue);
			}
			return previousValue;
		},
		[[]],
	);

	const onPressHandle = (id: number | string) => () =>
		navigation.navigate(Screens.SET_YOUR_GOAL, { id });

	return (
		<View style={styles.container}>
			<View style={styles.titleTextContainer}>
				<Text style={styles.titleText}>Choose your first habit</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.habitsContainerColumns}>
					{manyHabits.map((habits) => (
						<View
							style={styles.habitsContainerRow}
							key={habits.reduce((pv, cv) => pv + cv.id, "")}
						>
							{habits.map((habit) => (
								<View style={styles.habitsContainer} key={habit.id}>
									<HabitIcon
										text={habit.title}
										asset={habit.url}
										key={habit.id}
										onPress={onPressHandle(habit.id)}
										textStyle={styles.habitText}
									/>
								</View>
							))}
						</View>
					))}
				</View>
			</ScrollView>
		</View>
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
		top: 50,
		marginTop: 60,
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
		alignSelf: "center",
		letterSpacing: 0.03,
	},
	habitsContainerColumns: {
		top: 100,
		width: 320,
		flexDirection: "column",
		flex: 1,
		alignItems: "center",
	},
	habitsContainerRow: {
		flexDirection: "row",
		flex: 1,
		marginVertical: 10,
	},
	habitsContainer: {
		marginHorizontal: 29,
	},
	habitText: {
		color: "#FFFFFF",
		letterSpacing: 0.03,
		fontSize: 15,
		fontFamily: "Rubik",
		fontWeight: "600",
		fontStyle: "normal",
		top: 10,
	},
});
