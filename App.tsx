import React from "react";
import { AuthProvider } from "./src/providers/AuthProvider";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
	return (
		<AuthProvider>
			<Navigation />
		</AuthProvider>
	);
}

