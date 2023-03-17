import { BreakpointKeys, BreakpointValues } from "./type";
import { BreakpointsOptions } from "@mui/material";

const breakpointKeys: BreakpointKeys = {
	0: "xs",
	1: "sm",
	2: "md",
	3: "lg",
	4: "xl",
};

const breakpointValues: BreakpointValues = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536,
};

const breakpoints = {
	keys: { ...breakpointKeys },
	values: { ...breakpointValues },
};

export { breakpoints };
