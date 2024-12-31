import { AnimationBackground } from "./_components/AnimationBackground";
import { BigText } from "./_components/BigText";
import { Hero } from "./_components/Hero";
import { RotatePluses } from "./_components/RotatePluses";
import s from "./page.module.css";

export default function Home() {
	return (
		<div className={s.root}>
			<div className={s.topRight}>
				<RotatePluses rotate={-20} direction="rightToLeft" />
			</div>
			<div className={s.bottomLeft}>
				<RotatePluses rotate={40} direction="leftToRight" />
			</div>
			<AnimationBackground scrollDirection="topToBottom" />
			<BigText text="I AM" className={s.im} />
			<BigText text="AYUU" className={s.ayuu} />
			<Hero />
		</div>
	);
}
