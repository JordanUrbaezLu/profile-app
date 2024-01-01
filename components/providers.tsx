"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const Providers = ({ children }: { children: any }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <main>{children}</main>
    </QueryClientProvider>
  );
};

export default Providers;
