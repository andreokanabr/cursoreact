import "./App.css";
import Car from "./components/Car";

function App() {
	const Cars = [
		{ name: "Fusca", km: 10000, color: "Branca" },
		{ name: "Polo", km: 32000, color: "Cinza" },
		{ name: "Onix", km: 0, color: "Preto" },
		{ name: "Civic", km: 5000, color: "Vermelho" },
		{ name: "Corolla", km: 15000, color: "Azul" },
		{ name: "Golf", km: 20000, color: "Prata" },
		{ name: "Fiesta", km: 8000, color: "Amarelo" },
		{ name: "Ka", km: 12000, color: "Verde" },
		{ name: "Sandero", km: 25000, color: "Laranja" },
	];
	return (
		<div className="App">
			<h1>Lista de carros</h1>
			<div className="car-container">
				{Cars.map((c) => (
					<Car c={c} />
				))}
			</div>
		</div>
	);
}

export default App;
