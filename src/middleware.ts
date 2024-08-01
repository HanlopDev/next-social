import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedroute= createRouteMatcher(["/settings(.*)"])

export default clerkMiddleware((auth, req)=>{
    if (isProtectedroute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};