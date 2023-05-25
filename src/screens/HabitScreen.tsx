import { RectangleBackButton } from "@Components/ui/RectangleBackButton";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { padding } from "../utils/padding";

export const HabitScreen = ({ route: { id }, navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>

			</View>
			<RectangleBackButton onPress={() => navigation.goBack()} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		...padding(0, 13),
		flex: 1,
	},
	header: {
		marginTop: 45,
	},
});
