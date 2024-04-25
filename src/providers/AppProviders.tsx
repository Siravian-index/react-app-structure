import { AuthLoader } from "@/lib/auth";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter } from 'react-router-dom';

const ErrorFallback = () => {
  return (
    <div>
      <h2 >Ooops, something went wrong :( </h2>
      <button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

const LoadingFallback = () => {
  return (
    <div>
      Loading
    </div>
  );
};

function AppProviders({ children }: { children: React.ReactNode }) {

  return (
    <React.Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AuthLoader
              renderLoading={LoadingFallback}
              // renderUnauthenticated={() => <Appro />}
            >
              {children}
            </AuthLoader>
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}


export default AppProviders