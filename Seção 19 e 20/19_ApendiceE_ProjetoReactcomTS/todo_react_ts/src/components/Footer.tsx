import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				<span>React + TypeScript @ {new Date().getFullYear()} </span>
			</p>
		</footer>
	);
};

export default Footer;
