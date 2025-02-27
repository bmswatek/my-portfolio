import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar"; // Importing Navbar component

// Importing Space Mono font from Google Fonts with weight 400
const spaceMono = Space_Mono({
  weight: "400", // Specify the weight here, you can also use "700" for bold
  variable: "--font-space-mono",
  subsets: ["latin"],
});

// Metadata for the website
export const metadata = {
  title: "My Portfolio",
  description: "Generated by Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} antialiased bg-purple-900 text-white`} // Applied background color and font
      >
        <Navbar /> {/* Adding Navbar globally */}
        {children} {/* This will render the rest of the page content */}
      </body>
    </html>
  );
}
