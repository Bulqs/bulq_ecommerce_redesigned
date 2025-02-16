import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/session";
import { cookies } from "next/headers";
import { NAVIGATION, ROLES, Session } from "./types/index";

export default async function middleware(req: NextRequest) {
    // Get path
  const path = req.nextUrl.pathname;

  const publicRoutes = [NAVIGATION.LOGIN.toString(), NAVIGATION.SIGNUP.toString(), NAVIGATION.CHANGE_PASSWORD.toString(), NAVIGATION.ABOUT_US.toString(), NAVIGATION.PRODUCTS.toString(), NAVIGATION.REVIEWS.toString(), NAVIGATION.SHIPPING.toString(), NAVIGATION.TERMS.toString(), NAVIGATION.BRAND.toString(), NAVIGATION.HOME.toString()];

  /* Define Protected Routes By User Roles */
  const isAdminProtectedRoute = path.startsWith(NAVIGATION.ADMIN_DASHBOARD);
  const isVendorProtectedRoute = path.startsWith(NAVIGATION.VENDOR);
  const isUserProtectedRoute = path.startsWith(NAVIGATION.USER);
  const isDriverProtectedRoute = path.startsWith(NAVIGATION.DRIVER);

  // If on empty path - Go to Login page
  if (path == "/") {
    return NextResponse.redirect(new URL(NAVIGATION.LOGIN, req.nextUrl));
  }


  if (publicRoutes.includes(path)) {
    // If going to login page, please go
    return NextResponse.next();
  }

  // 3. Decrypt the session gotten from the cookie
  const cookie = (await cookies()).get("session")?.value!;

  // 4. If no cookie found, redirect to /login page
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Retrieve session
  let session: Session | null = null;

  try {
    session = await decrypt(cookie);
  } catch (error) {
    // Redirect to login to create new session
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to /login if the user is not authenticated or user is not an admin
  if (
    isAdminProtectedRoute &&
    (!session || session?.authorities[0]?.authority != ROLES.ADMIN)
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to /login if the user is not authenticated or driver is not an admin
  if (
    isDriverProtectedRoute &&
    (!session || session?.authorities[0]?.authority != ROLES.DRIVER)
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to /login if the user is not authenticated or user is not an vendor
  if (
    isVendorProtectedRoute &&
    (!session || session?.authorities[0]?.authority != ROLES.VENDOR)
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  // Redirect to /login if the user is not authenticated or user is not a user
  if (
    isUserProtectedRoute &&
    (!session || session?.authorities[0]?.authority != ROLES.USER)
  ) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Successful authentication, continue on path
  return NextResponse.next();

}

// Allow images and SVGs
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|.*\\.gif$).*)",
  ],
};