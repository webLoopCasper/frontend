import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";
import { getHomepageDataMeta } from "@/data/loaders";
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

export async function generateMetadata() {
  // generateMetadata() is a next function
  // const metadata = await getHomepageDataMeta();

  // return {
  //   title: metadata?.title,
  //   description: metadata.metaDescription,
  // };
}
let global = await getGlobalData();

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={`${fair.variable} ${mulish.variable}`}>
        <Header data={global.header} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
