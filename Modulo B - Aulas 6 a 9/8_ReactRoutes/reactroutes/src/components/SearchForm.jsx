import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const SearchForm = () => {
	const navigate = useNavigate();
	const [query, setQuery] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		// versão atual, pega tudo
		navigate("/search?name_like=" + query);
		// versão antiga
		// navigate("/search?q=" + query);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={(e) => setQuery(e.target.value)} />
			<input type="submit" value="Buscar" />
		</form>
	);
};
