import "./App.css";

import City from "./assets/city.jpg";
import CarDetails from "./components/carDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
	const name = "MJ";
	const cars = [
		{ id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
		{ id: 2, brand: "KIA", color: "Branco", km: 200000 },
		{ id: 3, brand: "Renault", color: "Azul", km: 32000 },
	];
	return (
		<div className="App">
			<h1>Avançando em React</h1>
			{/* Imagem em public */}
			<div>
				<img src="/img1.jpg" alt="Paisagem" />
			</div>
			{/* Imagem em assets */}
			<div>
				<img src={City} alt="Cidade" />
			</div>
			<ManageData />
			<ListRender />
			<ConditionalRender />
			<ShowUserName name={name} />
			<CarDetails brand="Toyota" km={0} color="Prata" newCar={true} />
			{/* reaproveitamento */}
			<CarDetails brand="Honda" km={0} color="Preto" newCar={true} />
			<CarDetails
				brand="Ford"
				km={40000}
				color="Vermelho"
				newCar={false}
			/>
			<CarDetails brand="Fiat" km={20000} color="Branco" newCar={false} />
			<CarDetails brand="Chevrolet" km={0} color="Azul" newCar={true} />
			<CarDetails
				brand="Volkswagen"
				km={60000}
				color="Cinza"
				new={false}
			/>
			{/* loop em array de objetos */}
			{cars.map((car) => (
				<CarDetails
					// key={car.id}
					brand={car.brand}
					color={car.color}
					km={car.km}
					newCar={car.km === 0 ? true : false}
				/>
			))}
		</div>
	);
}

export default App;
