import React, { Suspense } from 'react';
import Loading from '../loading';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
