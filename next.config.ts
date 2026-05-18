import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin workspace root to this project (silences the "multiple lockfiles" warning
    // caused by an unrelated package-lock.json elsewhere on the machine).
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
