"use client";
import React from "react";

import { SessionProvider } from "next-auth/react";

interface NextAuthProviderProps {
  children: React.ReactNode;
}

export const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
