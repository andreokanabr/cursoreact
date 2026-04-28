import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import UserDetails from "./components/UserDetails";

const pessoas = [
	{ id: 1, nome: "Heitor", idade: 27, profissão: "Programador" },
	{ id: 2, nome: "Carla", idade: 28, profissão: "Professora" },
	{ id: 3, nome: "Caique", idade: 14, profissão: "Estudante" },
];

function App() {
	return (
		<>
			{pessoas.map((pessoas) => (
				<UserDetails
					key={pessoas.id}
					nome={pessoas.nome}
					idade={pessoas.idade}
					profissão={pessoas.profissão}
				/>
			))}
		</>
	);
}

export default App;
