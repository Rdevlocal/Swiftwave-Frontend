import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isHomeRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
    try {
        const { userId } = await auth();

        if (userId && isHomeRoute(req)) {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
    } catch (error) {
        console.error("Middleware error:", error);
    }
    
    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
