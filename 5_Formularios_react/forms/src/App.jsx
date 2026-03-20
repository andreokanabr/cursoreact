import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MyForm from "./components/MyForm";

function App() {
	return (
		<div className="App">
			<h1>Forms</h1>
			<MyForm
				user={{
					name: "Nicolas Cage",
					email: "ncage@example.com",
					bio: "Ator e diretor americano",
					role: "admin",
				}}
			/>
		</div>
	);
}

export default App;
