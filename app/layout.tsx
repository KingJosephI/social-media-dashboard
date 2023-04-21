import "./globals.css";
// import { createContext, useContext } from "react";

export const metadata = {
  title: "Social Media Dashboard",
  description: "Dashboard showing statistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
