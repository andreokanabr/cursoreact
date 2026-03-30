import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
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

				<li>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}>
						ℹ️ Sobre
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/register"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}>
						📋 Cadastrar
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/login"
						className={({ isActive }) =>
							isActive ? styles.active : styles.inactive
						}>
						Login 🔒
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
