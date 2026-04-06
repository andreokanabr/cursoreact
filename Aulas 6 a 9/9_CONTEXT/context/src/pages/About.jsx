// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
	// const { counter } = useContext(CounterContext);
	const { counter } = useCounterContext();

	// 5 - contexto mais complexo
	const { color, dispatch } = useTitleColorContext();

	console.log(color);

	// 5 - alterando contexto complexo
	const setTitleColor = (color) => {
		dispatch({ type: color });
	};
	return (
		<div>
			<h1 style={{ color: color }}>About</h1>
			<p>Valor do contador {counter}</p>
			{/* 3 - alterando valor contexto */}
			{/* 6 - alterando contexto complexo */}
			<div>
				<button onClick={() => setTitleColor("RED")}>Vermelho</button>
				<button onClick={() => setTitleColor("BLUE")}>Azul</button>
			</div>
		</div>
	);
};

export default About;
