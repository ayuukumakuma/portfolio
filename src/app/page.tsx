import { AnimationBackground } from "./_components/AnimationBackground";
import { BigText } from "./_components/BigText";
import s from "./page.module.css";

export default function Home() {
	return (
		<div className={s.root}>
			<BigText text="AYUU" className={s.ayuu} />
			<BigText text="PORTFOLIO" className={s.portfolio} />
			<AnimationBackground scrollDirection="topToBottom" />
		</div>
	);
}
