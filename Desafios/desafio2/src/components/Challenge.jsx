const Challenge = () => {
	const dadosnumericos = {
		num1: 5,
		num2: 4,
	};

	const handleSoma = (e) => {
		console.log("Resultado:", dadosnumericos.num1 + dadosnumericos.num2);
	};

	return (
		<div>
			<div>
				<p>Numero 1: {dadosnumericos.num1}</p>
				<p>Numero 2: {dadosnumericos.num2}</p>
			</div>
			<div>
				<p>Calcular</p>
				<button onClick={handleSoma}>Clique aqui</button>
			</div>
		</div>
	);
};

export default Challenge;
