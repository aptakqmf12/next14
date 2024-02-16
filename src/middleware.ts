import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// https://nextjs.org/docs/app/building-your-application/routing/middleware

export function middleware(request: NextRequest) {
  // 여기는 next server에서 실행되는 코드

  if (request.nextUrl.pathname.startsWith("/redirect")) {
    const paths = request.nextUrl.pathname.replace("/redirect", "");
    return NextResponse.rewrite(
      new URL(`https://jsonplaceholder.typicode.com/${paths}`, request.url)
    );
  }
}

// /redirect 로 시작하는 endpoint로 찔렀을때만 middleware적용
export const config = {
  matcher: ["/redirect/:path*"],
};
