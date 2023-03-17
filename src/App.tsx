import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { ThemeProvider } from "@emotion/react";
import customTheme from "./config/theme/theme";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<ThemeProvider theme={customTheme}>
			<div className='App'>
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src='/vite.svg' className='logo' alt='Vite logo' />
					</a>
					<a href='https://reactjs.org' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
				<Stack spacing={2} direction='row'>
					<Button variant='text'>Text</Button>
					<Button variant='contained'>Contained</Button>
					<Button variant='outlined'>Outlined</Button>
				</Stack>
			</div>
		</ThemeProvider>
	);
}

export default App;
