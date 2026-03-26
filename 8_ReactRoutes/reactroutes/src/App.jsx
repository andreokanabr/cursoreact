import { useState } from "react";

import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";

//components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Info from "./pages/Info";
import { SearchForm } from "./components/SearchForm";

function App() {
	return (
		<div className="App">
			<h1>React Routes</h1>
			<BrowserRouter>
				{/* 2 - links c/ react-router */}
				<Navbar />
				{/* 9 - search */}
				<SearchForm />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					{/* 6 - nested route */}
					<Route path="/products/:id/info" element={<Info />} />
					{/* 4 - Rota Dinamica */}
					<Route path="/products/:id" element={<Product />} />
					{/* 9 search params */}
					<Route path="/search" element={<Search />} />
					{/* 7  - no match route */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
