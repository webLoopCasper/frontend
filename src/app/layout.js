import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import { getGlobalData } from "@/data/loaders";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const fair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-fair",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});


let global = await getGlobalData();

export default function RootLayout({ children }) {
  return (
    <html lang="da">  
      <body className={`${fair.variable} ${mulish.variable}`}>
        <Header data={global} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
