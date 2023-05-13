/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 7:23 PM
 */

export const formatPhoneNumber = (text: string) => {
	const formattedText = text.replace(/[^0-9]/g, "");
	if (formattedText.length < 4) {
		return formattedText;
	} else if (formattedText.length < 7) {
		return `(${formattedText.slice(0, 3)}) ${formattedText.slice(3)}`;
	} else {
		return `(${formattedText.slice(0, 3)}) ${formattedText.slice(3, 6)}-${formattedText.slice(6, 10)}`;
	}
};