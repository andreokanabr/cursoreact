import MyComponent from "./MyComponent";

const FirstComponent = () => {
	return (
		<div>
			<h1>Meu Primeiro Componente</h1>
			<hr />
			<p className="teste">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Numquam, quos mollitia. Iste eligendi molestiae ex!
			</p>
			<hr />
			<MyComponent />
		</div>
	);
};

export default FirstComponent;
