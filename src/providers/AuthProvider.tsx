/**
 * @author: CHIKIRIAY
 * @created: 4/19/23
 * @Time: 3:06 AM
 */
import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";
import { axiosPost } from "@Request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as UserService from "@Services/user.service";
import * as AuthService from "@Services/auth.service";
import { User } from "@Services/user.service";
import { accessTokenKey } from "../api-client";
import LoaderScreen from "../screens/LoaderScreen";

type AuthContextType = {
	user: User | null;
	registerHandler: (login: string, email: string, password: string) => void;
	loginHandler: (phone: string, password: string) => void;
	logoutHandler: (accessToken: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	registerHandler: async () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	loginHandler: async () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	logoutHandler: async () => {},
});

type AuthProviderProps = {
	children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const registerHandler = async (login: string, email: string, password: string) => {
		setIsLoading(true);
		try {
			const newUser = await UserService.register(login, email, password);

			setUser(newUser);

			const auth = await AuthService.login(newUser.username, password);
			await AsyncStorage.setItem(accessTokenKey, auth.accessToken);
		} catch (e) {
			Alert.alert("Ошибка при регистрации", e);
		} finally {
			setIsLoading(false);
		}
	};

	const loginHandler = async (username: string, password: string) => {
		setIsLoading(true);
		try {
			const auth = await AuthService.login(username, password);
			await AsyncStorage.setItem(accessTokenKey, auth.accessToken);
			// сохраняем информацию о пользователе в состояние
			// setUser(user);
		} catch (e) {
			Alert.alert("Ошибка при авторизации", e);
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = async () => {
		setIsLoading(true);
		try {
			// const accessToken = await AsyncStorage.getItem(accessTokenKey);
			// await axiosPost("auth/logout", { accessToken });

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

	return (
		<AuthContext.Provider value={{ user, registerHandler, loginHandler, logoutHandler }}>
			{children}
		</AuthContext.Provider>
	);
};
