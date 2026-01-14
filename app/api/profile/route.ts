import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("token")?.value;

// return token back to client
  return NextResponse.json({
    message: "Come from backend",
    tokenReceived: token
  });
}
