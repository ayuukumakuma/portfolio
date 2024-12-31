import * as motion from "motion/react-client";
import s from "./RotatePlus.module.css";

export const RotatePlus = () => {
	return (
		<motion.div
			className={s.root}
			initial={{ rotate: 0 }}
			animate={{ rotate: 360 }}
			transition={{
				duration: 20,
				repeat: Number.POSITIVE_INFINITY,
				ease: "linear",
			}}
		>
			<span className={s.horizontal} />
			<span className={s.vertical} />
		</motion.div>
	);
};
