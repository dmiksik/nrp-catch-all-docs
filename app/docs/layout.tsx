import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Image
            src="/logo.svg"
            alt="Catch-all Data Repository"
            width={140}
            height={52}
            priority
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
