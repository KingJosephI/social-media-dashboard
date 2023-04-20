import "./globals.css";

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
      <body className="container mx-auto">{children}</body>
    </html>
  );
}
