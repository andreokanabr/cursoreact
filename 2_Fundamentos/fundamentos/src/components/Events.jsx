const Events = () => {
	const handleMyEvent = (e) => {
		console.log(e);
		console.log("Evento disparado");
	};

	const renderSomething = (x) => {
		if (x) {
			return <h1>Renderizando isso</h1>;
		} else {
			return <h1>Também posso renderizando isso</h1>;
		}
	};

	return (
		<div>
			<div>
				<p>Botão com evento disparado</p>
				<button onClick={handleMyEvent}>Clique aqui</button>
			</div>
			<hr />
			<div>
				<p>Outro botão com evento disparado</p>
				<button onClick={() => console.log("Clicou!")}>
					Clique aqui também
				</button>
				{/* <button
					onClick={() => {
						if (true) {
							console.log("Isso não deveria existir =)");
						}
					}}>
					Clica Aqui, por favor.
				</button> */}
			</div>
			<hr />
			{renderSomething(true)}
			{renderSomething(false)}
		</div>
	);
};

export default Events;
