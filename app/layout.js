import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Nav"

import Example from "@/Components/simple";
import Hero from "@/Components/hero";
import {Plus_Jakarta_Sans} from '@next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-jakarta',
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dropify Front-End",
  description: "Create Dropify Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className={`${jakarta.variable} bg-gray-50 h-screen`}>
          <Example/>
          <Hero/>
          {children}
        </div>
      </body>
    </html>
  );
}
