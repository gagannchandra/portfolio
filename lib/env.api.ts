export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const token = process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN ?? "";
export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const mode = process.env.NODE_ENV;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

export const giscusRepoId = process.env.NEXT_PUBLIC_GISCUS_REPOID ?? "";
export const giscusCategoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORYID ?? "";
export const umamiSiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ?? "";

export const isSanityConfigured = Boolean(projectId && dataset && token);
