import { useState } from "react";

import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/info";
import NotFound from "./pages/NotFound";
function App() {
	return (
		<div className="App">
			<h1>React Routes</h1>
			<BrowserRouter>
				{/* 2 - links c/ react-router */}
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* 6 - nested route */}
					<Route path="/products/:id/info" element={<Info />} />
					{/* 4 - Rota Dinamica */}
					<Route path="/products/:id" element={<Product />} />
					{/* 7  - no match route */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
