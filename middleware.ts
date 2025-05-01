import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  let url = "https://unicove.com";

  if(request.nextUrl.pathname.length > 1) {
    let path = request.nextUrl.pathname;

    if(path.includes('/tx/')) {
      path = path.replace('/tx/', '/transaction/');
    }

    url += path;
  }

  return NextResponse.redirect(new URL(url, request.url));
}

export const config = {
  runtime: 'experimental-edge',
}