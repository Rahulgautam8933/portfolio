import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/compoments/Navbar";
import Footer from "@/compoments/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul gautam react & next js developer",
  description: "react  & next js developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div>
          <Navbar />
        </div>
        <div>
          {children}
        </div>
        <div>
          <Footer />
        </div>

      </body>
    </html>
  );
}
