import {
	CommonColor,
	ColorLevel,
	GreyColorLevel,
	Text,
	Background,
	ActionColor,
} from "./type";

import { PaletteColorOptions } from "@mui/material";

const common: CommonColor = {
	black: "#000",
	white: "#fff",
};

const primary: PaletteColorOptions = {
	// main: "#1976d2",
	main: "#EC3C15",
	light: "#42a5f5",
	// dark: "#1565c0",
	// note: this value will be used as button 's hover state
	dark: "#9CA5EE",
	contrastText: "#fff",
};

const secondary: ColorLevel = {
	main: "#9c27b0",
	light: "#ba68c8",
	dark: "#7b1fa2",
	contrastText: "#fff",
};

const error: ColorLevel = {
	main: "#d32f2f",
	light: "#ba68c8",
	dark: "#7b1fa2",
	contrastText: "#fff",
};

const warning: ColorLevel = {
	main: "#ed6c02",
	light: "#ff9800",
	dark: "#e65100",
	contrastText: "#fff",
};

const info: ColorLevel = {
	main: "#0288d1",
	light: "#03a9f4",
	dark: "#01579b",
	contrastText: "#fff",
};

const success: ColorLevel = {
	main: "#2e7d32",
	light: "#4caf50",
	dark: "#1b5e20",
	contrastText: "#fff",
};

const grey: GreyColorLevel = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#",
	500: "#",
	600: "#",
	700: "#",
	800: "#",
	900: "#",
	A100: "#",
	A200: "#",
	A400: "#",
	A700: "#",
};

const text: Text = {
	primary: "rgba(0, 0, 0, 0.87)",
	secondary: "rgba(0, 0, 0, 0.6)",
	disabled: "rgba(0, 0, 0, 0.38)",
};

const background: Background = {
	paper: "#fff",
	default: "#fff",
};

const action: ActionColor = {
	active: "rgba(0, 0, 0, 0.54)",
	hover: "rgba(0, 0, 0, 0.04)",
	hoverOpacity: 0.04,
	selected: "rgba(0, 0, 0, 0.08)",
	selectedOpacity: 0.08,
	disabled: "rgba(0, 0, 0, 0.26)",
	disabledBackground: "rgba(0, 0, 0, 0.12)",
	disabledOpacity: 0.38,
	focus: "rgba(0, 0, 0, 0.12)",
	focusOpacity: 0.12,
	activeOpacity: 0.12,
};

export const palette = {
	common,
	primary,
	secondary,
	error,
	warning,
	success,
	info,
	grey,
	text,
	background,
	action,
};
