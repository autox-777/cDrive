import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "cDrive | Login Page",
  description:
    "cDrive is a cloud storage platform specially designed for personal uses of Team CDX Members.",
  icons: {
    icon: "/favicon.png", // make sure this file exists in /public/favicon.png
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
