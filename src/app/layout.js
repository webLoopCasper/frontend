import { Inter } from "next/font/google";
import "./globals.css";
import { getHomepageDataMeta } from "@/data/loaders";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata(){ // generateMetadata() is a next function
  const metadata = await getHomepageDataMeta();
 
  return {
    title: metadata?.title,
    description: metadata.metaDescription,
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p>header</p>
        {children}
        <p>footer</p>
      </body>
      
    </html>
  );
}
