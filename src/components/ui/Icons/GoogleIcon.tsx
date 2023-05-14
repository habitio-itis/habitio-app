import { LocalSvg } from "react-native-svg";
import { StyleSheet, View } from "react-native";

export const GoogleIcon = ({ width = 24, height = 24 }) => {
	return (
		<View style={style.icon}>
			<LocalSvg
				width={width}
				height={height}
				asset={require("../../../assets/images/Google.svg")}
			/>
		</View>
	);
};

const style = StyleSheet.create({
	icon: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
