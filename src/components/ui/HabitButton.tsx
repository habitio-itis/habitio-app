import { View, StyleSheet, Text } from "react-native";
import { padding } from "../../utils/padding";
import { LocalSvg } from "react-native-svg";
import { FC } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface Props {
	name: string;
	progress: string;
	onPress: () => void;
}

export const HabbitButton: FC<Props> = ({ name, progress, onPress }) => {
	return (
		<TouchableWithoutFeedback style={styles.container} onPress={onPress}>
			<View style={styles.habitOverview}>
				<View style={styles.habitIcon}>
					<LocalSvg asset={require("../../assets/images/Walking.svg")} />	
				</View>
				<View style={styles.progressImage}>
					<LocalSvg asset={require("../../assets/images/progress.svg")} />	
				</View>
			</View>
			<View>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.progress}>{progress}</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		...padding(25, 25, 10),		
		backgroundColor: "#F9F9F9",
		borderRadius: 22,
	},
	habitOverview: {
		justifyContent: "center",
		alignItems: "center",
	},
	habitIcon: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 50,
	},
	progressImage: {
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		left: 15,
	},
	text: {
		marginTop: 130,
		fontFamily: "Rubik",
		fontWeight: "400",
		fontSize: 20,
		lineHeight: 32,
		color: "#4D57C8",
	},
	progress: {
		fontFamily: "Rubik",
		fontWeight: "400",
		fontSize: 20,
		lineHeight: 32,
		color: "#4D57C8",
	},
});
