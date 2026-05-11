import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/nrp-catch-all-docs' : '',
};

export default withMDX(config);
