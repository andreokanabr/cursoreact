const Events = () => {
	const handleMyEvent = (e) => {
		console.log(e);
		console.log("Evento disparado");
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
		</div>
	);
};

export default Events;
