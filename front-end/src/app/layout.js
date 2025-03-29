import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Select Imobiliária",
  description: "Seja bem vindo ao nosso site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
