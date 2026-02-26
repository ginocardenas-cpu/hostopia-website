import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hostopia | The Platform That Powers Service Provider Growth",
  description:
    "Hostopia is a wholesale white-label provider of email, website, ecommerce, and digital marketing platforms. We help telcos and resellers unlock new revenue streams and become true digital advisors to small business.",
  keywords:
    "white label hosting, wholesale email, private label website builder, telco digital services, SMB platform, service provider reseller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
