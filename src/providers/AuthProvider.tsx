/**
 * @author: CHIKIRIAY
 * @created: 4/19/23
 * @Time: 3:06 AM
 */
import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";
import { axiosPost } from "@Request";
import { User } from "../common/types/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
	user: User | null;
	registerHandler: (phone: string, password: string) => Promise<void>;
	loginHandler: (phone: string, password: string) => Promise<void>;
	logoutHandler: (accessToken: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	registerHandler: async () => {},
	loginHandler: async () => {},
	logoutHandler: async () => {},
});

type AuthProviderProps = {
	children: ReactNode;
};

const accessTokenKey = "token";

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const registerHandler = async (phone: string, password: string) => {
		setIsLoading(true);
		try {
			// const user = await axiosPost<User>("auth/register", { phone, password });
			const user: User = { phone, token: "JWT", username: "username" };

			// сохраняем информацию о пользователе в состояние
			setUser(user);

			// сохраняем токен в хранилище
			await AsyncStorage.setItem(accessTokenKey, user.token);
		} catch (e) {
			Alert.alert("Ошибка при регистрации", e);
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (phone: string, password: string) => {
		setIsLoading(true);
		try {
			const user = await axiosPost<User>("auth/login", { phone, password });

			// сохраняем информацию о пользователе в состояние
			setUser(user);

			// сохраняем токен в хранилище
			await AsyncStorage.setItem(accessTokenKey, user.token);
		} catch (e) {
			Alert.alert("Ошибка при авторизации", e);
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async (accessToken: string) => {
		setIsLoading(true);
		try {
			await axiosPost("auth/logout", { accessToken });

			// удаляем токен из хранилища
			await AsyncStorage.removeItem(accessTokenKey);

			// удаляем информацию о пользователе из состояния
			setUser(null);
		} catch (e) {
			Alert.alert("Ошибка при авторизации", e);
		} finally {
			setIsLoading(false);
		}
	};

	// добавляем инпуты для ввода номера телефона и пароля
	return (
		<AuthContext.Provider value={{ user, registerHandler, loginHandler, logoutHandler }}>
			{children}
		</AuthContext.Provider>
	);
};
