import Header from "@components/Header";
import type React from "react";
import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import { NavigationContainer } from "@react-navigation/native";
import HomeTab from "@routes/AppRouter";

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={Theme}>
			<NavigationContainer>
				<SafeAreaView style={{backgroundColor: Theme.colors.background}}/>
				<HomeTab />
			</NavigationContainer>
		</ThemeProvider>
	);
}

export default App;
