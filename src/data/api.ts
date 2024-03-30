import { Spellbinder } from "spellbinder";

import { env } from "./env";

export const s = new Spellbinder({
  baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
});
