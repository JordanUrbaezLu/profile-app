import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();

  const currentUser = await prisma.user.findUnique({
    where: {
      profileID: cookieStore.get("profileID")?.value,
    },
  });

  return NextResponse.json(currentUser);
}
