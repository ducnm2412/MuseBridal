import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Đặt lịch chụp và liên hệ",
  description:
    "Đăng ký tư vấn hoặc đặt lịch chụp ảnh cưới với Muse Bridal. Zalo, Messenger, hotline và bản đồ studio tại TP.HCM.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <section id="dat-lich" className="scroll-mt-24">
          <h1 className="display text-5xl md:text-7xl">Đặt lịch chụp</h1>
          <p className="mt-4 max-w-md text-ink-soft leading-7">
            Để lại thông tin, Muse gọi lại trong ngày để tư vấn concept và giữ lịch.
            Chưa chắc ngày cũng không sao.
          </p>
          <div className="mt-10">
            <Suspense fallback={null}>
              <BookingForm />
            </Suspense>
          </div>
        </section>

        {/* Điện thoại: hai cột gọn cạnh nhau; desktop: một cột bên phải form */}
        <aside className="md:pt-24 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-1 md:gap-y-10 text-sm md:text-base leading-7">
          <div>
            <h2 className="display-italic text-2xl md:text-3xl mb-2">Liên hệ</h2>
            <a href={site.phoneHref} className="block hover:text-brown">
              Gọi {site.phone}
            </a>
            <a href={site.zalo} target="_blank" rel="noreferrer" className="block hover:text-brown">
              Nhắn Zalo
            </a>
            <a href={site.messenger} target="_blank" rel="noreferrer" className="block hover:text-brown">
              Nhắn Messenger
            </a>
            <a href={`mailto:${site.email}`} className="block hover:text-brown break-all">
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="display-italic text-2xl md:text-3xl mb-2">Studio</h2>
            <p className="text-ink-soft">{site.address}</p>
            <p className="text-ink-soft">{site.hours}</p>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block underline underline-offset-4 hover:text-brown"
            >
              Mở trong Google Maps
            </a>
          </div>
        </aside>
      </div>

      <div className="mt-10 md:mt-16 aspect-[16/10] md:aspect-[21/9] bg-beige">
        <iframe
          title="Bản đồ đến Muse Bridal"
          src={site.mapsEmbed}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
