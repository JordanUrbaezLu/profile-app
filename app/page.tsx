"use client";
import CreateAccountButton from "@/components/create-account-button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 shadow-md rounded flex gap-2">
        <CreateAccountButton />
      </div>
    </div>
  );
}
