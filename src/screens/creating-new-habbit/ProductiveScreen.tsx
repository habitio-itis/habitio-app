/**
 * @author: CHIKIRIAY
 * @created: 5/23/23
 * @Time: 10:35 PM
 */
import { StyleSheet, Text, View } from "react-native";
import { CustomBigImageButton } from "@Components/ui/CustomBigImageButton";
import { Screens } from "@Constants/Screens";

export const ProductiveScreen = ({ navigation }) => {
	const data = [
		{
			id: 1,
			titleText: "I want to build good habits",
			image: require("../../assets/images/procrastinate/ProcrastinateButton1.svg"),
		},
		{
			id: 2,
			titleText: "I want to be organized",
			image: require("../../assets/images/procrastinate/ProcrastinateButton2.svg"),
		},
		{
			id: 3,
			titleText: "Not ready to answer",
			image: require("../../assets/images/procrastinate/ProcrastinateButton3.svg"),
		},
	];
	const handlePress = (id: number) => () => {
		// todo fetch
		navigation.navigate(Screens.CHOOSE_HABIT, { id });
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleTextContainer}>
				<Text style={styles.titleText}>What do you hope to achive with Main Habit</Text>
			</View>
			<View style={styles.rowsContainer}>
				{data.map(({ text, id, image }) => (
					<CustomBigImageButton
						key={id}
						onPress={handlePress(id)}
						text={text}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						svgProps={{
							asset: image,
							style: { position: "absolute", zIndex: 0 },
						}}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#4D57C8",
		flexDirection: "column",
		flex: 1,
		alignItems: "center",
	},
	titleTextContainer: {
		top: 80,
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
	rowsContainer: {
		flexDirection: "column",
		flex: 1,
		bottom: 0,
		position: "absolute",
	},
	buttonText: {
		fontFamily: "Rubik",
		fontSize: 14,
		color: "#FFFFFF",
		fontWeight: "600",
		textAlign: "left",
		alignSelf: "flex-start",
		left: 15,
	},
	button: { height: 73, width: 382, bottom: 30, marginBottom: 30 },
});
