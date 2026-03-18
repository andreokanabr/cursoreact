import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<FirstComponent />
			<TemplateExpressions />
		</div>
	);
}

export default App;
