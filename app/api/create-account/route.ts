import prisma from "@/app/libs/prismadb";
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
  const { email, name, password, profileID } = body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      //profileID: getProfileID(),
      profileID,
    },
  });
  return NextResponse.json(user);
}
