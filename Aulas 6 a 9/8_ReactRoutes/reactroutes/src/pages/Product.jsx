import { useFetch } from "../hooks/useFetch";

import { useParams, Link } from "react-router-dom";

import "./Product.css";

const Product = () => {
	//4  - rota dinamica
	const { id } = useParams();

	//5 - carregamento de dados
	const url = "http://localhost:5172/products/" + id;

	const { data: product, loading, error } = useFetch(url);

	return (
		<>
			{error && <p>Ocorreu um erro...</p>}
			{loading && <p>Carregando produto...</p>}
			{product && (
				<div>
					<ul className="products">
						<li>
							<p>ID do produto: {id}</p>
							<h1>{product.name}</h1>
							<p>R${product.price}</p>
							{/* 6 - nested routes */}
							<Link to={`/products/${product.id}/info`}>
								Mais informações
							</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Product;
