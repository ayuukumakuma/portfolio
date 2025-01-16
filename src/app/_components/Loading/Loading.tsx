"use client";
import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AnimationBackground } from "../AnimationBackground";
import s from "./Loading.module.css";

type Styles = {
	[key: string]: string;
};

export const Loading = () => {
	const [showMask, setShowMask] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowMask(true), 1500);
		return () => clearTimeout(timer);
	}, []);

	const transition = {
		duration: 2,
		ease: "circInOut",
	};

	const layers = ["base", "first", "second", "third"];

	return (
		<div className={s.root}>
			<div className={s.maskWrapper}>
				<motion.div
					className={s.mask}
					initial={{
						width: 0,
						height: 0,
					}}
					animate={{ width: "100vw", height: "100vw", scale: 2 }}
					transition={{ delay: 1.3, duration: 1, ease: "circInOut" }}
				/>
			</div>
			{layers.map((layer, index) => (
				<motion.div
					key={layer}
					className={clsx(s.background, (s as Styles)[layer])}
					initial={{ left: `${index * 12}%` }}
					animate={{ left: 0, width: 0 }}
					transition={transition}
				/>
			))}
			{layers.map((layer, index) => (
				<motion.div
					key={`${layer}-right`}
					className={clsx(s.background, (s as Styles)[layer])}
					initial={{ right: `${index * 12}%` }}
					animate={{ right: 0, width: 0 }}
					transition={transition}
				/>
			))}
			{!showMask && (
				<AnimationBackground
					duration={0.3}
					plusColor="#fff"
					scrollDirection="topToBottom"
				/>
			)}
		</div>
	);
};
