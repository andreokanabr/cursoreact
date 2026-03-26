// 2 - links c/ react-router
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			{/* <Link to="/">Home</Link>
			<Link to="/about">Sobre</Link> */}
			<NavLink
				to="/"
				style={({ isActive }) => ({
					color: isActive ? "red" : "black",
					fontWeight: isActive ? "bold" : "normal",
					textDecoration: "none",
					marginRight: "15px",
				})}>
				Home
			</NavLink>
			<NavLink
				to="/about"
				style={({ isActive }) => ({
					color: isActive ? "red" : "black",
					fontWeight: isActive ? "bold" : "normal",
					textDecoration: "none",
				})}>
				Sobre
			</NavLink>
		</nav>
	);
};

export default Navbar;
