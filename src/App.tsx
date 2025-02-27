import Header from "@components/Header";
import type React from "react";
import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={Theme}>
			<View>
				<SafeAreaView />
				<Header />
			</View>
		</ThemeProvider>
	);
}

export default App;
