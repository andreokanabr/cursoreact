import "./App.css";
import { useState } from "react";

import City from "./assets/city.jpg";
import CarDetails from "./components/carDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import MessageState from "./components/MessageState";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";

import Container from "./components/Container";
function App() {
	const name = "MJ";
	const [userName] = useState("Maria");

	const cars = [
		{ id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
		{ id: 2, brand: "KIA", color: "Branco", km: 200000 },
		{ id: 3, brand: "Renault", color: "Azul", km: 32000 },
	];

	function showMessage() {
		console.log("Evento do componente pai");
	}

	const [message, setMessage] = useState();

	const handleMessage = (msg) => {
		setMessage(msg);
	};

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
			<ShowUserName name={userName} />
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
					key={car.id}
					brand={car.brand}
					color={car.color}
					km={car.km}
					newCar={car.km === 0 ? true : false}
				/>
			))}
			{/* fragment */}
			<Fragment propFragment="teste" />
			{/* children prop */}
			<Container>
				<p>Eu sou do componente superior</p>
			</Container>
			<Container>
				<div>
					<p>Eu também</p>
				</div>
			</Container>
			{/* Executar função / event as prop */}
			<ExecuteFunction myFunction={showMessage} />
			{/* state lift */}
			<MessageState msg={message} />
			<ChangeMessageState handleMessage={handleMessage} />
		</div>
	);
}

export default App;
