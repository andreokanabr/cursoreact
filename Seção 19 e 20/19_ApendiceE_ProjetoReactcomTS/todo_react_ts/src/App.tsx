// CSS
import styles from "./App.module.css";

// Componentes
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<div>
			<Header />
			<main className={styles.main}>Conteudo...</main>
			<Footer />
		</div>
	);
}

export default App;
