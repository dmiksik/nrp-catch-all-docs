import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${base}/logo.svg`}
            alt="Catch-all Data Repository"
            width={140}
            height={52}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
