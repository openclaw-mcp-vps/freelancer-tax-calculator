import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTax — Real-time tax estimates for freelancer invoices",
  description: "Calculate quarterly tax obligations as you create invoices. Account for deductions and multiple income streams automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b9008622-009f-4e7b-a629-e5b1b0916d49"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
