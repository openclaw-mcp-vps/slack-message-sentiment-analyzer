import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Sentiment Analyzer – Monitor Team Mood in Real Time",
  description: "Analyze Slack messages to track team mood, identify burnout signals, and alert managers before issues escalate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="72024e2c-a4c0-4811-8a38-47f9c7ef2126"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
