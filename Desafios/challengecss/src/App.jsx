import "./App.css";
import Car from "./components/Car";

function App() {
	const Cars = [
		{ name: "Fusca", km: 10000, color: "Branca" },
		{ name: "Polo", km: 32000, color: "Cinza" },
		{ name: "Onix", km: 0, color: "Preto" },
	];
	return (
		<div className="App">
			<h1>Showroom de carros</h1>
			<div className="car-container">
				{Cars.map((c) => (
					<Car c={c} />
				))}
			</div>
		</div>
	);
}

export default App;
