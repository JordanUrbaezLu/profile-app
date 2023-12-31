import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { profileID } = body;

  const deletedAccount = await prisma.user.delete({
    where: {
      profileID,
    },
  });
  return NextResponse.json(deletedAccount);
}
