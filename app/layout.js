import { Inter } from "next/font/google";

// Look & Feel
import "./assets/css/globals.css";

// Fonts
const fonts = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vanilla Blog",
  description: "This is a blog application built with NextJS and MongoDB.",
  author: "Kind of Byte",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
