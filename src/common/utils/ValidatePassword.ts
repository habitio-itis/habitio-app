/**
 * @author: CHIKIRIAY
 * @created: 5/13/23
 * @Time: 7:35 PM
 */

export const validatePassword = (password: string): string[] => {
	const minLength = 8;
	const regexUpperCase = /[A-Z]/;
	const regexLowerCase = /[a-z]/;
	const regexNumber = /\d/;
	const errs: string[] = [];

	if (password.length < minLength) {
		errs.push("Минимальная длина 7 символов.");
	}

	if (!regexUpperCase.test(password)) {
		errs.push("Должен содержать как минимум одну заглавную букву.");
	}

	if (!regexLowerCase.test(password)) {
		errs.push("Должен содержать как минимум одну строчную букву.");
	}

	if (!regexNumber.test(password)) {
		errs.push("Должен содержать как минимум одну цифру.");
	}

	// Дополнительная проверка на плохой пароль
	const weakPasswords = ["password", "letmein", "welcome", "abc", "123", "admin", "qwe"];
	if (weakPasswords.some((include) => password.toLowerCase().includes(include))) {
		errs.push("Не содержать легкого пароля (на подобии 123, qwe).");
	}

	return errs;
};
