import React from "react";
import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
import Routes from "./pages/Routes";
import DataProvider from "../src/contexts/Data/DataProvider";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
	return (
		<ThemeProvider theme={colors}>
			<DataProvider>
				<Routes />
				<Analytics />
			</DataProvider>
		</ThemeProvider>
	);
};

export default App;
