"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import s from "./Hero.module.css";

export const Hero = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<div className={s.root} data-isopen={isOpenMenu}>
			<motion.div
				className={s.container}
				layout
				transition={{
					type: "spring",
					stiffness: 700,
					damping: 30,
					duration: 1,
				}}
			>
				<AnimatePresence initial={false}>
					<motion.button
						onClick={() => setIsOpenMenu(true)}
						className={s.circle}
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
					</motion.button>
					{isOpenMenu && (
						<motion.button
							key={"menu"}
							onClick={() => setIsOpenMenu(false)}
							className={clsx(s.circle, s.menuCircle)}
							whileTap={{
								scale: 1.1,
							}}
							initial={{
								scale: 0,
							}}
							animate={{
								scale: 1,
							}}
							exit={{
								scale: 0,
							}}
							transition={{
								duration: 0.2,
								ease: "easeOut",
							}}
						>
							<p className={clsx(s.text, s.menuText)}>{"Menu >"}</p>
						</motion.button>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
