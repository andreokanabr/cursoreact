// dependências react router
import { NavLink } from "react-router-dom";

// hooks
import useAuthentication from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

// estilos
import styles from "./Navbar.module.css";
import { use } from "react";

const Navbar = () => {
	const { user } = useAuthValue();
	const { logout } = useAuthentication();

	return (
		<nav className={styles.navbar}>
			<NavLink className={styles.brand} to="/">
				MINI <span>Blog</span>
			</NavLink>
			<ul className={styles.links_list}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}>
						🏠 Home
					</NavLink>
				</li>
				{!user && (
					<>
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}>
								Entrar
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}>
								Cadastrar
							</NavLink>
						</li>
					</>
				)}
				{user && (
					<>
						<li>
							<NavLink
								to="/posts/create"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}>
								Novo post
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									isActive ? styles.active : styles.inactive
								}>
								Dashboard
							</NavLink>
						</li>
					</>
				)}
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}>
						Sobre
					</NavLink>
				</li>
				{/* opção 1 - usando button */}
				{/* {user && (
					<li>
						<button onClick={logout}>Sair</button>
					</li>
				)} */}
				{/* opção 2 - usando NavLink */}

				{user && (
					<li>
						<NavLink
							onClick={logout}
							to="/about"
							className={({ isActive }) =>
								isActive ? styles.active : styles.inactive
							}>
							⍈ Sair
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
