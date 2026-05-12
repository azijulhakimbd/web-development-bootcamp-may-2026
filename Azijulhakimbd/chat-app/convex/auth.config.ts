import { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      domain: "https://bright-mustang-84.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
} satisfies AuthConfig;