import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
// import Nav from "@/components/nav";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], // Define the subset
  weight: ["300", "400", "500", "700"], // Add weights you need
  variable: "--font-plus-jakarta", // Define a CSS variable for the font
});

export const metadata = {
  title: "Alagon Energy Resource - Sustainable Agriculture Solutions",
  description:
    "Alagon Energy Resource specializes in agricultural procurement, supply chain solutions, and high-quality confectionery products for a greener future.",
  keywords: [
    "Agriculture",
    "Procurement",
    "Supply",
    "Confectioneries",
    "Sustainable Farming",
    "Agritech",
    "Organic Products",
  ],
  authors: [{ name: "Alagon Energy Resource" }],
  openGraph: {
    title: "Alagon Energy Resource - Sustainable Agriculture Solutions",
    description:
      "Empowering agriculture with procurement, supply chain solutions, and premium confectionery products.",
    url: "https://alagonenergy.com",
    type: "website",
    images: [
      {
        url: "/alagon-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Alagon Energy Resource",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alagon Energy Resource - Sustainable Agriculture Solutions",
    description:
      "Empowering agriculture with procurement, supply chain solutions, and premium confectionery products.",
    images: ["/alagon-preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}
