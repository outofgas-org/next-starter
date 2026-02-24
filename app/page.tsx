"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { login } = usePrivy();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Button size={"lg"} onClick={login}>
          Login
        </Button>
      </main>
    </div>
  );
}
