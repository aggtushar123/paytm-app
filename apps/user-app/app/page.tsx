"use client";

import { useBalance } from "@repo/store/useBalance";

export default function Home() {
	const balance = useBalance();
	return <div className="text-2xl">HI There!! {balance}</div>;
}
