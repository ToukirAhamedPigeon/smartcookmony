import type { Metadata } from "next";
import { ReduxProvider } from './providers';
import "./globals.css";


export const metadata: Metadata = {
  title: "Smart Cook Mony",
  description: "Smart Cook Mony Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <ReduxProvider>
        {children}
      </ReduxProvider>
      </>  
  );
}
