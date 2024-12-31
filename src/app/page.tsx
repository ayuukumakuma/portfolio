import { AnimationBackground } from "./_components/AnimationBackground";
import { BigText } from "./_components/BigText";
import { Hero } from "./_components/Hero";
import s from "./page.module.css";

export default function Home() {
	return (
		<div className={s.root}>
			<BigText text="I AM" className={s.im} />
			<BigText text="AYUU" className={s.ayuu} />
			<Hero />
			<AnimationBackground scrollDirection="topToBottom" />
		</div>
	);
}
