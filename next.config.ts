import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    quietDeps: true, // for now we use @import for compatibility with nuxt2
    prependData: `@import "/public/lib.scss";`,
  },
};

export default nextConfig;
