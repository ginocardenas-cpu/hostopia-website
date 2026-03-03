import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Hostopia Connects",
  description: "Sales and marketing enablement hub for Hostopia partners and teams."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-[#f7f6f2] text-[#24282B]">
          {children}
        </main>
      </body>
    </html>
  );
}

