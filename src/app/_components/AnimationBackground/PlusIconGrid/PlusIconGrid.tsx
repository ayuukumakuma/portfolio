"use client";
import { IconPlus } from "@tabler/icons-react";
import { useRef, useSyncExternalStore } from "react";
import s from "./PlusIconGrid.module.css";

export const PlusIconGrid = () => {
	const subscribe = (callback: () => void) => {
		if (typeof window === "undefined") return () => {};

		window.addEventListener("resize", callback);

		return () => {
			window.removeEventListener("resize", callback);
		};
	};

	const lastSnapshot = useRef({
		width: window ? window.innerWidth : 0,
		height: window ? window.innerHeight : 0,
	});

	const getSnapshot = () => {
		const newSnapshot = {
			width: window.innerWidth,
			height: window.innerHeight,
		};
		if (
			newSnapshot.width !== lastSnapshot.current.width ||
			newSnapshot.height !== lastSnapshot.current.height
		) {
			lastSnapshot.current = newSnapshot;
		}
		return lastSnapshot.current;
	};

	const getServerSnapshot = () => ({
		width: 0,
		height: 0,
	});

	const { width, height } = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot,
	);

	const x = Math.round(width / 128 / 2);
	const y = Math.round(height / 128 / 2);

	return (
		<div className={s.column}>
			{[...Array(y)].map((_, yidx) => {
				return (
					<div key={yidx} className={s.row}>
						{[...Array(x)].map((_, xidx) => {
							return (
								<div key={xidx}>
									<IconPlus size={64} color="#464443" />
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};
