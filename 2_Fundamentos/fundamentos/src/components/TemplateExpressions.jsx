const TemplateExpressions = () => {
	const name = "Wagner Moura";
	const data = {
		idade: 49,
		cargo: "Ator / Diretor",
	};
	const conta = {
		num1: 5,
		num2: 4,
	};
	return (
		<div>
			<h1>Olá {name}, tudo bem?</h1>
			<hr />
			<p>Idade: {data.idade}</p>
			<hr />
			<p>Profissão: {data.cargo}</p>
			<hr />
			<p>{4 + 4}</p>
			<hr />
			<p>{console.log("JSX React")}</p>
			<p>
				A soma da conta {conta.num1} + {conta.num2} tem o resultado de{" "}
				{conta.num1 + conta.num2}
			</p>
		</div>
	);
};

export default TemplateExpressions;
