import { defineMiddleware } from "astro:middleware";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "connect-src 'self' https://*.api.sanity.io https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "upgrade-insecure-requests"
].join("; ");

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
  const forwardedProto = request.headers.get("x-forwarded-proto");

  if (forwardedProto === "http") {
    const redirectUrl = new URL(url);
    redirectUrl.protocol = "https:";

    return Response.redirect(redirectUrl, 301);
  }

  const response = await next();
  const headers = response.headers;

  headers.set("Content-Security-Policy", contentSecurityPolicy);
  headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=(), payment=(), usb=()");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");

  if ((forwardedProto ?? url.protocol.replace(":", "")) === "https") {
    headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  }

  if (url.pathname.startsWith("/book-consultation/")) {
    headers.set("Cache-Control", "no-store");
  }

  return response;
});
