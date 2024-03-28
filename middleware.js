import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { loginKey } from "./app/constants";

export function middleware(request) {
  const cookieStore = cookies(request);
  const authToken = cookieStore.get("authToken");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("authToken", authToken || "");

  const url = request.nextUrl;

  if (
    (!authToken || authToken.value != loginKey) &&
    url.pathname.startsWith("/dashboard")
  ) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
