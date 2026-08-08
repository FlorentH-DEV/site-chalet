import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chalet à Anglès dans le Tarn | Vue sur le lac",
  description:
    "Découvrez notre chalet à Anglès dans le Tarn, proche du lac de la Raviège. Profitez d'un séjour nature entre lacs, randonnées et activités en pleine nature.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className="antialiased"
    >
      <body className="">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
