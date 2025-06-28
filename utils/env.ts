import * as z from "zod";

// Environment variables schema
export const envSchema = z.object({
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
    CLERK_SECRET_KEY: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string(),
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string(),
});

// Validate environment variables
const envResult = envSchema.safeParse(process.env);

if (!envResult.success) {
    console.error("Invalid environment variables:", envResult.error.format());
    throw new Error("Invalid environment variables");
}

// Export validated environment variables
export const env = envResult.data;