import "./App.css";

// 4 - Importação de componente
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando Props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 9 - Contexto
import { createContext } from "react";

// 10 - Consumindo Contexto
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - Contexto
interface IAppContext {
	// I maiúsculo a frente para definir o nome da interface
	language: string;
	framework: string;
	projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
	// 1 - variaveis
	const name: string = "Chico Bento";
	const age: number = 8;
	const isWorking: boolean = true;

	// 2 - Funções
	const userGreeting = (name: string): string => {
		return `Olá, ${name}!`;
	};

	// 8 - type
	const myText: textOrNull = "Tem algum texto aqui";
	let mySecondText: textOrNull = null;

	mySecondText = "Texto 2";

	// const testFixed:fixed = 'abc'
	// Não permite valores fora dos fixados na atribuição de fixed acima
	const testFixed: fixed = "Isso";

	// 9 - Context
	const contextValue: IAppContext = {
		language: "JavaScript",
		framework: "Express",
		projects: 5,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<div className="App">
				{/* <h1>TypeScript com React</h1>
			<h2>Nome: {name}</h2>
			<p>Idade: {age}</p>
			{isWorking && (
							<div>
								<p>Está Trabalhando"</p>
							</div>
						)} */}
				<h1>TS com React </h1>
				<table style={{ width: "100%" }}>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Idade</th>
							<th>Está trabalhando?</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{name}</td>
							<td>{age}</td>
							{/* <td>{isWorking && (
							<div>
								<p>Está Trabalhando"</p>
							</div>
						)}
						</td> */}
							<td>{isWorking ? <p>Sim!</p> : <p>Não!</p>}</td>
						</tr>
					</tbody>
				</table>
				<hr />
				<h3>{userGreeting(name)}</h3>
				<hr />
				<FirstComponent />
				<hr />
				<SecondComponent name="Segundo" />
				<hr />
				<SecondComponent name={name} />
				<hr />
				<Destructuring
					title="Primeiro post"
					content="Algum conteúdo"
					commentsQty={10}
					tags={["ts", "js"]}
					category={Category.TS}
				/>
				<hr />
				<Destructuring
					title="Segundo post"
					content="Mais outro conteúdo"
					commentsQty={5}
					tags={["c++"]}
					category={Category.C}
				/>
				<hr />
				<State />
				<hr />
				{myText && <p>{myText}</p>}
				{mySecondText && <p>{mySecondText}</p>}
				{testFixed}
				<hr />
				<Context />
			</div>
		</AppContext.Provider>
	);
}

export default App;
