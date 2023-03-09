import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 581,
  site: "pombastore",
  domains: ["pombastore.deco.site"],
});