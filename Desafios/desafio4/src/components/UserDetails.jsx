/* eslint-disable react/prop-types */

const UserDetails = ({ nome, idade, profissão }) => {
	return (
		<div>
			<h2>Lista de pessoas</h2>
			<ul>
				<li>Nome: {nome}</li>
				<li>Idade: {idade}</li>
				<li>Profissão: {profissão}</li>
				{idade >= 18 && <p>Maior de idade, pode tirar CNH!</p>}
				{idade < 18 && <p>Menor de idade, não pode tirar CNH!</p>}
			</ul>
		</div>
	);
};

export default UserDetails;
