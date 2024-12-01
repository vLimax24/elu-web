"use client"

import "./globals.css";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInFallbackRedirectUrl={"/dashboard"}
      signUpFallbackRedirectUrl={"/welcome"}
      afterSignOutUrl={"/"}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`font-sans ${inter.variable}`}
        >
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ConvexProviderWithClerk>
        </body>
      </html>
    </ClerkProvider>
  );
}
