"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SignUpCard from "@/components/signupcard";
import DeleteAccountCard from "@/components/deletaccountcard";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex items-center justify-center">
        <div className="p-8 shadow-md rounded flex gap-2">
          <SignUpCard />
          <DeleteAccountCard />
        </div>
      </div>
    </QueryClientProvider>
  );
}
