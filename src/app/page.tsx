import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.root}>
			<div className={styles.scrollContainer}>
				<section className={styles.scrollItem}>Section 1</section>
				<section className={styles.scrollItem}>Section 2</section>
				<section className={styles.scrollItem}>Section 3</section>
				<section className={styles.scrollItem}>Section 4</section>
			</div>
		</div>
	);
}
