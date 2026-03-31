import styles from "./Login.module.css";

import { useEffect, useState } from "react";
// import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	return (
		<div className={styles.login}>
			<h1>Entrar</h1>
			<p>Faça o login para poder utilizar o sistema</p>
			<form onSubmit={0}>
				<label>
					<span>E-mail:</span>
					<input
						type="email"
						name="email"
						required
						placeholder="📧 E-mail do usuário"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Senha:</span>
					<input
						type="password"
						name="password"
						required
						placeholder="🔑 Insira a senha"
						autoComplete="true"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				{error && <p className="error">{error}</p>}
				<button className="btn">Login 🔒</button>
			</form>
		</div>
	);
};

export default Login;
