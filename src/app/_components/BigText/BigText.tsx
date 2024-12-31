import clsx from "clsx";
import s from "./BigText.module.css";

type Props = {
	text: string;
	className?: string;
};

export const BigText = ({ text, className }: Props) => {
	return <p className={clsx(className, s.root)}>{text}</p>;
};
