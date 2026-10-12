"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/lib/data";

/**
 * Khối dịch vụ: danh sách bên trái, một ảnh lớn bên phải đổi theo mục đang chọn.
 * Trên điện thoại: ảnh ở trên, danh sách ở dưới.
 */
export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.1fr_1fr] md:gap-14 items-start">
      {/* Ảnh lớn: chỉ hiện trên desktop, điện thoại dùng ảnh trong từng mục */}
      <div className="hidden md:block relative aspect-[4/5] md:sticky md:top-28 overflow-hidden bg-beige md:order-2" data-parallax="0.06">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={s.image.src}
              alt={s.image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 md:p-7 text-cream">
          <p className="display-italic text-2xl md:text-3xl">{current.title}</p>
        </div>
      </div>

      {/* Danh sách dịch vụ */}
      <ol className="md:order-1 border-t border-ink/20">
        {services.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title} className="border-b border-ink/20">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={on}
                className="w-full text-left py-5 md:py-6 flex gap-4 md:gap-6 items-baseline"
              >
                <span
                  className={`display text-4xl md:text-5xl lg:text-6xl leading-none transition-colors duration-300 ${
                    on ? "text-brown" : "text-ink/70"
                  }`}
                >
                  {s.title}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* Điện thoại: ảnh mở ra ngay trong mục đang chọn */}
                  <div className="md:hidden relative aspect-[4/3] overflow-hidden bg-beige mb-4">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                  <p className="pb-5 md:pb-6 max-w-md leading-7 text-ink-soft">{s.text}</p>
                  <Link
                    href={s.href}
                    className="mb-6 inline-block underline underline-offset-4 hover:text-brown"
                  >
                    Tìm hiểu {s.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
