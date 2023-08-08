import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export { default } from "next-auth/middleware"

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);
    if (
      request.nextUrl.pathname.startsWith("/settings") &&
      request.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(
        new URL('/error',request.url)
      )
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/settings",'/'],
};
