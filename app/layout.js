import { Inter } from "next/font/google";
import "./globals.css";
import { BaseProvider } from "./contexts/BaseContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EvilCorp",
  description: "An evil corporation",
};

export default function RootLayout({ children }) {
  return (
    <BaseProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </BaseProvider>
  );
}
