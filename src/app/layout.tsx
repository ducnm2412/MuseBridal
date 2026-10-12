import type { Metadata } from "next";
import { Be_Vietnam_Pro, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import QuickContact from "@/components/QuickContact";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Muse Bridal | Studio ảnh cưới Sài Gòn",
    template: "%s | Muse Bridal",
  },
  description:
    "Muse Bridal chụp ảnh cưới phim trường và ngoại cảnh tại TP.HCM. Trọn gói váy cưới thiết kế, veston, makeup, album và ảnh cổng. Hotline " +
    site.phone,
  openGraph: {
    title: "Muse Bridal | Studio ảnh cưới Sài Gòn",
    description:
      "Chụp ảnh cưới phim trường và ngoại cảnh Sài Gòn, trọn gói từ trang phục đến album.",
    locale: "vi_VN",
    type: "website",
    images: ["/portfolio/serene-love-2.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${beVietnam.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <SmoothScroll />
        <RevealObserver />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <QuickContact />
      </body>
    </html>
  );
}
