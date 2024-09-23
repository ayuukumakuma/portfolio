import type { Metadata } from "next";
import "@styles/reset.css";
import "@styles/variables.css";

export const metadata: Metadata = {
	title: "Ayuu's Portfolio",
	description: "Ayuuのポートフォリオです。",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>{children}</body>
		</html>
	);
}
