import * as motion from "motion/react-client";
import { RotatePlus } from "./RotatePlus";
import s from "./RotatePluses.module.css";

type Props = {
	rotate: number;
	direction: "leftToRight" | "rightToLeft";
};

const generateOption = (direction: "leftToRight" | "rightToLeft") => {
	switch (direction) {
		case "leftToRight":
			return {
				x: {
					initial: "-100%",
					animate: 0,
				},
			};
		case "rightToLeft":
			return {
				x: {
					initial: "100%",
					animate: 0,
				},
			};
		default:
			return direction satisfies never;
	}
};
export const RotatePluses = ({ rotate, direction }: Props) => {
	const { x } = generateOption(direction);
	return (
		<motion.div
			className={s.pluses}
			initial={{
				rotate,
				x: x.initial,
			}}
			animate={{
				x: x.animate,
			}}
			transition={{
				duration: 2,
			}}
		>
			<RotatePlus />
			<RotatePlus />
			<RotatePlus />
		</motion.div>
	);
};
