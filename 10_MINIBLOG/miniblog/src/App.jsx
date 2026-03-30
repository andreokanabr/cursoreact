// estilos
import "./App.css";

//react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<div className="container">
					<Routes>
						{/* rotas */}
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						{/* redirecionamento */}
						<Route path="/home" element={<Navigate to="/" />} />
						<Route
							path="/sobre"
							element={<Navigate to="/about" />}
						/>
						<Route
							path="/cadastrar"
							element={<Navigate to="/register" />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
