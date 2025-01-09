"use client";
import { IconClick } from "@tabler/icons-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import s from "./Hero.module.css";

type RepeatType = "loop" | "reverse" | "mirror" | undefined;

export const Hero = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const triangleVariant = {
		repeat: Number.POSITIVE_INFINITY,
		repeatType: "loop" as RepeatType,
		duration: 20,
		ease: "linear",
	};

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
				<AnimatePresence>
					<motion.button
						onClick={() => setIsOpenMenu(true)}
						className={s.circle}
						whileTap={{
							scale: 0.95,
						}}
						whileHover={{
							scale: 1.05,
						}}
					>
						<p className={s.text}>
							<Typewriter words={["Hi! I'm Ayuu."]} typeSpeed={50} />
						</p>
						<p className={s.text}>
							<Typewriter words={["I luv web developing!!"]} typeSpeed={50} />
						</p>
						{!isOpenMenu && (
							<div className={s.clickWrapper}>
								<motion.div
									className={s.click}
									initial={{ scale: 1 }}
									animate={{ scale: [1, 1.1, 1] }}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "loop",
										duration: 3,
										ease: "easeInOut",
										times: [0, 0.5, 1],
									}}
								>
									<IconClick size={"5vw"} color="#464443" />
									<p className={clsx(s.text, s.clickText)}>Click!!</p>
								</motion.div>
							</div>
						)}
					</motion.button>
					{isOpenMenu && (
						<motion.button
							key="menu"
							onClick={() => setIsOpenMenu(false)}
							className={clsx(s.circle, s.menuCircle)}
							whileTap={{
								scale: 0.95,
							}}
							whileHover={{
								scale: 1.05,
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
				<AnimatePresence initial={false}>
					{isOpenMenu && (
						<div className={s.links}>
							<Link href="/about" className={s.linkWrapper}>
								<motion.div
									className={s.link}
									key="about"
									initial={{
										x: 0,
									}}
									animate={{
										x: "50vw",
									}}
									exit={{
										x: "150%",
									}}
									transition={{
										duration: 0.2,
									}}
								>
									<p className={clsx(s.text, s.linksText)}>about</p>
									<motion.div
										className={s.triangle}
										initial={{
											rotate: 0,
										}}
										animate={{
											rotate: 360,
										}}
										transition={triangleVariant}
									/>
								</motion.div>
							</Link>
							<a
								href="https://zenn.dev/ayuu"
								target="_blank"
								className={s.linkWrapper}
								rel="noreferrer"
							>
								<motion.div
									className={s.link}
									key="blog"
									initial={{
										x: 0,
									}}
									animate={{
										x: "70vw",
									}}
									exit={{
										x: "150%",
									}}
									transition={{
										delay: 0.1,
										duration: 0.2,
									}}
								>
									<p className={clsx(s.text, s.linksText)}>blog</p>
									<motion.div
										className={s.triangle}
										initial={{
											rotate: 0,
										}}
										animate={{
											rotate: 360,
										}}
										transition={triangleVariant}
									/>
								</motion.div>
							</a>
							<Link href="/contact" className={s.linkWrapper}>
								<motion.div
									className={s.link}
									key="contact"
									initial={{
										x: 0,
									}}
									animate={{
										x: "90vw",
									}}
									exit={{
										x: "150%",
									}}
									transition={{
										delay: 0.2,
										duration: 0.2,
									}}
								>
									<p className={clsx(s.text, s.linksText)}>contact</p>
									<motion.div
										className={s.triangle}
										initial={{
											rotate: 0,
										}}
										animate={{
											rotate: 360,
										}}
										transition={triangleVariant}
									/>
								</motion.div>
							</Link>
						</div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};
