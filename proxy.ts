import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", pathname);

  // Only auto-redirect / to /en on the first visit (no locale cookie set yet).
  // Once the user explicitly chooses a language, we respect it forever.
  if (pathname === "/") {
    const cookieLocale = req.cookies.get("NEXT_LOCALE")?.value;
    if (!cookieLocale) {
      const accept = req.headers.get("accept-language") ?? "";
      const prefersEnglish =
        /\ben(?:-|;|$|,)/i.test(accept) && !/\bes/i.test(accept);
      if (prefersEnglish) {
        return NextResponse.redirect(new URL("/en", req.url));
      }
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
};
