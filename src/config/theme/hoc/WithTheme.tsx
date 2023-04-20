import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "../theme";

const WithTheme = (Component: React.ComponentType) => {
	return (props: any) => (
		<ThemeProvider theme={customTheme}>
			<Component {...props} />
		</ThemeProvider>
	);
};

export { WithTheme };
