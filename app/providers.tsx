"use client";

import { ReactNode } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { privyConfig } from "@/lib/privy";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <PrivyProvider appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!} config={privyConfig}>
      {children}
    </PrivyProvider>
  );
}
