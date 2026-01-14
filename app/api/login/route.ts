
import { NextResponse } from "next/server";

export async function POST() {
  const fakeToken = "TOKEN_123";

  const res = NextResponse.json({ success: true });


  res.cookies.set("token", fakeToken, {
    httpOnly: true,
    path: "/"
  });

  return res;
}
