import type React from "react";
import { Text, View } from "react-native";
import { Theme } from "../types/theme";

const Header: React.FC = () => {
	return (
		<View style={{ backgroundColor: Theme.colors.background }}>
			<Text>Header</Text>
		</View>
	);
};

export default Header;
