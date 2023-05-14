/**
 * @author: CHIKIRIAY
 * @created: 5/14/23
 * @Time: 1:56 PM
 */

export const timeout = (ms: number) => {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve(true);
		}, ms),
	);
};
