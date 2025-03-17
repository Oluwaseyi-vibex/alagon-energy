import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/nav";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], // Define the subset
  weight: ["300", "400", "500", "700"], // Add weights you need
  variable: "--font-plus-jakarta", // Define a CSS variable for the font
});

export const metadata = {
  title: "Alagon Energy Resource - Powering Energy & Agriculture",
  description:
    "Alagon Energy Resource specializes in crude oil, petroleum, energy solutions, procurement, supply chain management, and agricultural services for a sustainable future.",
  keywords: [
    "Crude Oil",
    "Petroleum",
    "Energy",
    "Procurement",
    "Supply Chain",
    "Agriculture",
    "Natural Gas",
    "Confectioneries",
    "Renewable Energy",
    "Agritech",
    "Sustainable Farming",
  ],
  authors: [{ name: "Alagon Energy Resource" }],
  openGraph: {
    title: "Alagon Energy Resource - Powering Energy & Agriculture",
    description:
      "Leading in crude oil, petroleum, energy solutions, procurement, supply chain management, and agricultural services for a sustainable future.",
    url: "https://www.alagonenergy.com/",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Alagon Energy Resource",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alagon Energy Resource - Powering Energy & Agriculture",
    description:
      "Leading in crude oil, petroleum, energy solutions, procurement, supply chain management, and agricultural services for a sustainable future.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}
