import type { Metadata } from "next";
import "@styles/reset.css";
import { Roboto } from "next/font/google";
import s from "./layout.module.css";

const roboto = Roboto({
	weight: ["400", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Hi, I'm Ayuu!!",
	description: "This site is Ayuu's portfolio.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={roboto.className}>
			<body className={s.root}>{children}</body>
		</html>
	);
}
