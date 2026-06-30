import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Read the token cookie synced from our Zustand store
  const token = request.cookies.get('voteflow-token')?.value;

  // If there's no token, redirect to the login page
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    // Optionally preserve the route they were trying to access
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/wallet/:path*',
    '/my-polls/:path*',
    '/settings/:path*',
    '/create/:path*',
    '/analytics/:path*',
    '/admin/:path*',
    '/notifications/:path*',
  ],
};
