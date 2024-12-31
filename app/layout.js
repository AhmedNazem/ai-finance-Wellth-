import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
export const metadata = {
  title: "Wellth",
  description:
    "Wellth is a Finance Platform for easy and fast interaction with your finances.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        {/* main */}
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💛 by Ahmed Nadhim </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
