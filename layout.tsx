import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charunivethitha S | VLSI • RTL • FPGA • Edge AI",
  description:
    "Portfolio of Charunivethitha S — Electronics & Communication Engineering, VLSI, RTL, FPGA, Edge AI and hardware security.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
