import React, { Suspense } from 'react';

// @ts-ignore
const LazyMetrics = React.lazy(() => import('./metrics'));

export const MetricsView = () => {
  return (
    <Suspense fallback="...">
      <LazyMetrics />
    </Suspense>
  );
};
