"use client";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import s from "./Hero.module.css";

export const Hero = () => {
	return (
		<div className={s.root}>
			<motion.div
				className={s.circle}
				whileHover={{
					scale: 1.1,
				}}
				whileTap={{
					scale: 1.1,
				}}
			>
				<p className={s.text}>
					<Typewriter words={["Hi! I'm Ayuu."]} typeSpeed={50} />
				</p>
				<p className={s.text}>
					<Typewriter words={["I luv web developing!!"]} typeSpeed={50} />
				</p>
			</motion.div>
		</div>
	);
};
