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
		"Inter": require("../../assets/fonts/Inter-Regular.ttf"),
		"Rubik": require("../../assets/fonts/Rubik-Regular.ttf"),
	});
};
