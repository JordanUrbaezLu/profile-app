"use client";

import CreateAccountForm from "@/app/libs/components/create-account-form";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 shadow-md rounded flex gap-2">
        <CreateAccountForm />
      </div>
    </div>
  );
}
