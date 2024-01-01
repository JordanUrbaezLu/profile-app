import prisma from "@/app/libs/database/prismadb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();

  const deletedAccount = await prisma.user.delete({
    where: {
      profileID: cookieStore.get("profileID")?.value,
    },
  });
  return NextResponse.json(deletedAccount);
}
