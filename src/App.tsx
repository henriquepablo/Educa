import Header from "@components/Header";
import type React from "react";
import { SafeAreaView, View } from "react-native";

function App(): React.JSX.Element {
	return (
		<View>
			<SafeAreaView />
			<Header />
		</View>
	);
}

export default App;
