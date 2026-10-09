// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pages = [
  "/", "/about", "/services", "/jobs", "/apply", "/contact", "/blog",
  "/blog/how-to-prepare-for-work-abroad",
  "/blog/your-rights-as-a-migrant-worker",
  "/blog/saudi-arabia-and-kuwait-opportunities",
  "/legal/privacy", "/legal/terms", "/legal/ethical-recruitment", "/legal/complaints",
].map((path) => ({ path }));

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Prerender every page to static HTML so the site can be hosted on plain static hosts (e.g. Plesk).
    pages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
