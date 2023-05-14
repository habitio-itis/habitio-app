/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 1:52 PM
 */
import * as Font from "expo-font";


/**
 * Функцию, которая загружает шрифты
 */
export const loadCustomFonts = (): Promise<void> => {
	return Font.loadAsync({
		"Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
		"Rubik": require("../../assets/fonts/Rubik-Regular.ttf"),
		"Rubik-Regular": require("../../assets/fonts/Rubik-Regular.ttf"),
		"Rubik-Black": require("../../assets/fonts/Rubik-Black.ttf"),
		"Rubik-Bold": require("../../assets/fonts/Rubik-Bold.ttf"),
	});
};
