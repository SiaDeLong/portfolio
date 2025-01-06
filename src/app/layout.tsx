import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Eric Sia",
  description: "This is a Portfolio for a full stack developer by Eric",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
