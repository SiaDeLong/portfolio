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
        <div className="bg-stone-800 h-screen">
          {children}
        </div>
        <div className="bottom-0 left-0 fixed w-screen">
          <h1 className="text-right mr-48 font-light text-[#e3e3e3] text-xs">Eric © 2024</h1>
        </div>
      </body>
    </html>
  );
}
