import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FacebookIcon, GoogleIcon } from "./Icons";
import { FC } from "react";

export interface Props {
	theme?: "facebook" | "google";
	onPress: () => void;
}

const getStylesObject = (theme: "facebook" | "google") => {
	const styles = {
		button: {
			width: 374,
			display: "flex",
			flexDirection: "row",
			borderRadius: 38,
			paddingHorizontal: 35,
			paddingVertical: 20,
			alignItems: "center",
		},
		text: {
			fontFamily: "Rubik",
			fontSize: 14,
			fontWeight: "500",
			marginLeft: 40,
		},
	};
	if (theme === "facebook") {
		return StyleSheet.create({
			...styles,
			button: { ...styles.button, backgroundColor: "#7583CA" },
			text: { ...styles.text, color: "white" },
		});
	} else if (theme === "google") {
		return StyleSheet.create({
			...styles,
			button: { ...styles.button, backgroundColor: "white" },
			text: { ...styles.text, color: "#3F414E" },
		});
	};
};

export const OAuthButton: FC<Props> = ({ theme = "facebook", onPress }) => {
	const styles = getStylesObject(theme);
	const facebook = theme === "facebook";
	return (
		<TouchableOpacity style={styles.button ?? {}} onPress={onPress}>
			{facebook ? <FacebookIcon width={26} height={26} /> : <GoogleIcon width={26} height={26} />}
			{facebook ?
				<Text style={styles.text ?? {}}>CONTINUE WITH FACEBOOK</Text> :
				<Text style={styles.text ?? {}}>CONTINUE WITH GOOGLE</Text>
			}
		</TouchableOpacity>
	);
};
