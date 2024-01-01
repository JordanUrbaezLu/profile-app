import prisma from "@/app/libs/database/prismadb";
import { NextResponse } from "next/server";

function getProfileID() {
  return (
    Math.round(Math.random() * 10000).toString() +
    "-" +
    Math.round(Math.random() * 10000).toString()
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      profileID: getProfileID(),
    },
  });
  return NextResponse.json(user);
}
