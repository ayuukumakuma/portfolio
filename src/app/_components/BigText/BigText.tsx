import clsx from "clsx";
import { Roboto } from "next/font/google";
import s from "./BigText.module.css";

type Props = {
	text: string;
	className?: string;
};

const roboto = Roboto({
	weight: "900",
	style: "italic",
	subsets: ["latin"],
});

export const BigText = ({ text, className }: Props) => {
	return <p className={clsx(roboto.className, className, s.root)}>{text}</p>;
};
