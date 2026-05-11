import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

export const docs = defineDocs({
  docs: {
    async: true,
  },
  dir: 'content',
});

export default defineConfig();
