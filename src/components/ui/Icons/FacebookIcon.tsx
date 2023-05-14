import { StyleSheet,View } from "react-native";
import { LocalSvg } from "react-native-svg";

export const FacebookIcon = ({ width, height }) => {
	return (
		<View style={style.icon}>		
			<LocalSvg
				width={width}
				height={height}
				asset={require("../../../assets/images/Facebook.svg")}
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
