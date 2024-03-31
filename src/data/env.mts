import z from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const envSchema = z.object({});

export type Env = z.infer<typeof envSchema>;

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    APP_URL: process.env.APP_URL,
  },
});
