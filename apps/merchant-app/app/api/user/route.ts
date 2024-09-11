import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const GET = () => {
	return NextResponse.json({
		message: "hi there",
	});
};
