import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><span className="text-gray-500">Loading…</span></div>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}