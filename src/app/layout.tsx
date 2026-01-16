import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Open_Sans} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";
import { Modal as LiveStoryModal } from "@/components/modals/LiveStoryModal";
import { Modal as GetDesignModal } from "@/components/modals/ContactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Axis",
  description: "High-quality UI/UX design that helps digital products look better, work clearer, and convert more effectively."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <ModalProvider>
          <Header />
            {children}
          <Footer />
          <LiveStoryModal />
          <GetDesignModal />
        </ModalProvider>
      </body>
    </html>
  );
}
