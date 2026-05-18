import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is disabled via the `dev`/`build` scripts in package.json.
  // Reason: Turbopack's persistent caching DB gets corrupted when the
  // project folder is synced by OneDrive (symptom:
  // "Failed to open database / invalid digit found in string").
  // Webpack is slower but doesn't have a persistent cache to corrupt.
};

export default nextConfig;
