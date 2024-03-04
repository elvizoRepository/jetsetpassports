import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/Components/sections/Footer";
import Navbar from "@/Components/sections/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JetSet Passports",
  description: "Buy A Real Passport Break Free from Passport Constraints",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}
