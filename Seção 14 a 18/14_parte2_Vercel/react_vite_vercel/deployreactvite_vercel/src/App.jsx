import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Deploy de React com Vite</h1>
			<p>Nunca foi tão fácil</p>
			<p>Atualização</p>
		</div>
	);
}

export default App;
