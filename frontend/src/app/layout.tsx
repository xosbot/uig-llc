import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "United Investing Group LLC — Global Investment & Technology",
  description: "UIG is a diversified investment and technology company operating across real estate, HR, trade, and digital solutions — connecting India with the global economy.",
  keywords: "United Investing Group, UIG, investment, real estate, technology, HR, global business",
  openGraph: {
    title: "United Investing Group LLC — Building the Future Across Borders",
    description: "Diversified investment and technology company operating across 40+ countries.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
