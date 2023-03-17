import { createTheme } from "@mui/material";
// import { deepmerge } from '@mui/utils'

import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const customTheme = createTheme({
	breakpoints: {
		values: breakpoints.values,
	},
	palette: {
		common: palette.common,
		primary: palette.primary,
	},
});

export default customTheme;
