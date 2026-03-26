import "./Home.css";

import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
	// 3 - Carregamento de dados
	const url = "http://localhost:5172/products";

	const { data: itens, loading, error } = useFetch(url);

	return (
		<div>
			<h1>Produtos</h1>
			{error && <p>{error}</p>}
			<ul className="products">
				{itens
					&& itens.map((item) => (
						<li key={item.id}>
							<h2>{item.name}</h2>
							<p>R$: {item.price}</p>
							{/* 4 - Rota Dinamica */}
							<Link to={`/products/${item.id}`}>Detalhes</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Home;
