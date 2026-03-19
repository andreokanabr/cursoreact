import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<hr />
			<FirstComponent />
			<TemplateExpressions />
			<hr />
			<MyComponent />
			<Events />
			<hr />
		</div>
	);
}

export default App;
