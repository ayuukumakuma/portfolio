import clsx from "clsx";
import * as motion from "motion/react-client";
import s from "./AnimationBackground.module.css";
import { PlusIconGrid } from "./PlusIconGrid";

type Props = {
	scrollDirection:
		| "topToBottom"
		| "bottomToTop"
		| "leftToRight"
		| "rightToLeft";
	plusColor?: string;
	duration?: number;
};

const generateAnimateConfig = (scrollDirection: Props["scrollDirection"]) => {
	switch (scrollDirection) {
		case "topToBottom":
			return {
				first: {
					initial: { y: "0%" },
					animate: { y: "100%" },
				},
				second: {
					initial: { y: "-200%" },
					animate: { y: "-100%" },
				},
			};
		case "bottomToTop":
			return {
				first: {
					initial: { y: "0%" },
					animate: { y: "-100%" },
				},
				second: {
					initial: { y: "0%" },
					animate: { y: "-100%" },
				},
			};
		case "leftToRight":
			return {
				first: {
					initial: { x: "0%" },
					animate: { x: "100%" },
				},
				second: {
					initial: { x: "-200%" },
					animate: { x: "-100%" },
				},
			};
		case "rightToLeft":
			return {
				first: {
					initial: { x: "0%" },
					animate: { x: "-100%" },
				},
				second: {
					initial: { x: "0%" },
					animate: { x: "-100%" },
				},
			};
		default:
			return scrollDirection satisfies never;
	}
};

const generateFlexDirection = (scrollDirection: Props["scrollDirection"]) => {
	switch (scrollDirection) {
		case "topToBottom":
		case "bottomToTop":
			return "column";
		case "leftToRight":
		case "rightToLeft":
			return "row";
		default:
			return scrollDirection satisfies never;
	}
};

export const AnimationBackground = ({
	scrollDirection,
	plusColor,
	duration,
}: Props) => {
	const { first, second } = generateAnimateConfig(scrollDirection);
	const flexDirection = generateFlexDirection(scrollDirection);

	return (
		<div className={clsx(s.root, s[flexDirection])}>
			<motion.div
				{...first}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "loop",
					ease: "linear",
					duration: duration ?? 30,
				}}
			>
				<PlusIconGrid plusColor={plusColor} />
			</motion.div>
			<motion.div
				{...second}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "loop",
					ease: "linear",
					duration: duration ?? 30,
				}}
			>
				<PlusIconGrid plusColor={plusColor} />
			</motion.div>
		</div>
	);
};
