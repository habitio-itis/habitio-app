/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 4:22 PM
 */
import { StyleSheet, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export const ProgressCircle = () => {
	return (
		<View>
			<Progress.Circle
				size={100}
				indeterminate={true}
				borderWidth={5}
				style={styles.container}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {},
});
