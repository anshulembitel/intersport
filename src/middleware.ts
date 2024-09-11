import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)',
  ],
};

const ProtectRoutes = ['/', '/productlist'];

const UnprotectedRoutes = ['/login'];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let cookie = request.cookies.get('token');
  let token = cookie?.value;
  const baseUrl = request.nextUrl.origin;
  let isValid = token;
 
  if (
    ProtectRoutes.includes(request.nextUrl.pathname) &&
    !isValid
  ) {
    return NextResponse.redirect(`${baseUrl}/login`);
  } else if (
    UnprotectedRoutes.some((item) =>
      request.nextUrl.pathname.startsWith(item)
    ) &&
    isValid
  ) {
    return NextResponse.redirect(`${baseUrl}/`);
  }

  const response = NextResponse.next();
  return response;
}
