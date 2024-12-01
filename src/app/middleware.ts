import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server"

export async function middleware(req: NextRequest) {
    const { userId } = getAuth(req);
    console.log(userId)

    if (userId) {
        // Redirect to dashboard if authenticated
        const url = req.nextUrl.clone();
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    // Continue to the original route if not authenticated
    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ['/login'], // Redirect from login page if already signed in
};
