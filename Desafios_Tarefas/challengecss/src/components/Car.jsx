import styles from "./Car.module.css";

const Car = ({ c }) => {
	return (
		<div className={styles.card}>
			<h1>{c.name}</h1>
			<p>{c.km} km</p>
			<p>Cor: {c.color}</p>
		</div>
	);
};

export default Car;
