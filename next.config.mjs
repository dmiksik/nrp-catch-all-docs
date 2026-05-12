import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const config = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: isProd ? '/nrp-catch-all-docs' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/nrp-catch-all-docs' : '',
  },
};

export default withMDX(config);
