"use client";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import styles from "./TopBackground.module.css";

export const TopBackground = () => {
	const [ref, animate] = useAnimate();

	useEffect(() => {
		animate(
			ref.current,
			{ y: ["0", "100vh"] },
			{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" },
		);
	}, [animate, ref]);

	return (
		<div className={styles.root} ref={ref}>
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
			<span className={styles.item} />
		</div>
	);
};
