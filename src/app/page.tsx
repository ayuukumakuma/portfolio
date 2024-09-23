"use client";
import { motion, useScroll } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
	const { scrollYProgress } = useScroll();
	return (
		<div className={styles.root}>
			<motion.div
				className={styles.progressBar}
				style={{ scaleX: scrollYProgress }}
			/>
			<div className={styles.scrollContainer}>
				<section className={styles.scrollItem}>Section 1</section>
				<section className={styles.scrollItem}>Section 2</section>
				<section className={styles.scrollItem}>Section 3</section>
				<section className={styles.scrollItem}>Section 4</section>
			</div>
		</div>
	);
}
