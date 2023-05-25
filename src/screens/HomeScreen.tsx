/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 1:58 AM
 */
import React, { useContext, useEffect, useState } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import { Screens } from "@Constants/Screens";
import { BurgerButton } from "@Components/ui/BurgerButton";
import { ScrollView } from "react-native-gesture-handler";
import { padding } from "../utils/padding";
import CalendarWeekRow from "@Components/ui/Calendar";
import { HabbitButton } from "@Components/ui/HabitButton";
import { AddButton } from "@Components/ui/AddButton";

const mockHabits = [
	{
		id: "0",
		name: "Drinking water",
		progress: "75%",
	},
	{
		id: "1",
		name: "Cycling",
		progress: "40%",
	},
	{
		id: "2",
		name: "Water",
		progress: "40%",
	},
	{
		id: "3",
		name: "Walking",
		progress: "40%",
	},
];

const HomeScreen = ({ navigation }) => {
	const { user, logoutHandler } = useContext(AuthContext);

	const [habits, setHabits] = useState(mockHabits);

	return (
		<SafeAreaView  style={styles.container}>
			<ScrollView style={styles.scrollableContainer}>
				<View style={styles.header}>
					<BurgerButton onPress={() => {}} />
				</View>
				<View style={styles.week}>
					<Text style={styles.today}>TODAY</Text>
					<CalendarWeekRow />
				</View>
				<View style={styles.habits}>
					{habits.map(({ name, progress, id }, idx) => (
						<View style={styles.habit}>
							<View
								// eslint-disable-next-line react-native/no-inline-styles
								style={{
									paddingVertical: 9,
									paddingRight: idx % 2 === 0 ? 9 : 0,
									paddingLeft: idx % 2 === 1 ? 9 : 0,
									paddingTop: idx === 0 || idx === 1 ? 0 : 9,
									paddingBottom: idx === habits.length - 1 || idx === habits.length - 2 ? 0 : 9,
								}}
							>
								<HabbitButton
									key={id}
									name={name}
									progress={progress}
									onPress={() => navigation.navigate(Screens.Habit, { id })}
								/>
							</View>
						</View>
					))}
					<AddButton style={styles.addButton} onPress={() => {}} />
				</View>
				<View style={styles.activities}>

				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#4D57C8",
	},
	scrollableContainer: {
		...padding(0, 15),
	},
	header: {
		marginTop: 40,
		color: "white",
	},
	today: {
		fontFamily: "Rubik",
		fontWeight: "400",
		fontSize: 24,
		lineHeight: 28,
		color: "white",
	},
	week: {
		marginTop: 30,
		display: "flex",
		flexDirection: "column",
	},
	habits: {
		marginTop: 50,
		display: "flex",
		alignItems: "stretch",
		flexDirection: "row",
		flexWrap: "wrap",	
	},
	habit: {
		flexBasis: "50%",
	},
	addButton: {
		position: "absolute",
		bottom: -36,
		right: 0,
	},
	activities: {

	},
});

export default HomeScreen;
