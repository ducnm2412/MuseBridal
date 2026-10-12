"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  BookOpenIcon,
  DressIcon,
  FilmSlateIcon,
  PaintBrushIcon,
  TreeIcon,
  type Icon,
} from "@phosphor-icons/react";
import { services } from "@/lib/data";

const icons: Icon[] = [FilmSlateIcon, TreeIcon, DressIcon, PaintBrushIcon, BookOpenIcon];

/** Vị trí các thẻ phía sau thẻ đang chọn: xoay và lệch dần để tạo cảm giác xoè bài. */
const fan = [
  "rotate-0 translate-x-0 translate-y-0",
  "-rotate-[7deg] -translate-x-[9%] translate-y-[3%]",
  "rotate-[6deg] translate-x-[9%] translate-y-[2%]",
  "-rotate-[12deg] -translate-x-[15%] translate-y-[6%]",
  "rotate-[11deg] translate-x-[15%] translate-y-[5%]",
];

/**
 * Khối dịch vụ: bên trái là chồng thẻ ảnh xoè, thẻ đang chọn nằm trên cùng;
 * bên phải là tiêu đề và danh sách đánh số, mục đang chọn mở ra phần mô tả.
 */
export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const n = services.length;
  const num = (i: number) => String(i + 1).padStart(2, "0");

  return (
    <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14 lg:gap-20 items-center">
      {/* Chồng thẻ ảnh */}
      <div className="relative mx-auto w-full max-w-[22rem] md:max-w-none aspect-[4/5] md:sticky md:top-28">
        {services.map((s, i) => {
          const depth = (i - active + n) % n; // 0 = trên cùng
          const Ic = icons[i];
          return (
            <button
              key={s.title}
              type="button"
              onClick={() => setActive((active + 1) % n)}
              aria-label={depth === 0 ? "Xem dịch vụ kế tiếp" : s.title}
              tabIndex={depth === 0 ? 0 : -1}
              className={`absolute inset-x-[6%] inset-y-[4%] overflow-hidden rounded-3xl bg-beige shadow-[0_24px_60px_rgba(43,33,28,0.22)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${fan[depth]}`}
              style={{ zIndex: n - depth }}
            >
              <Image
                src={s.image.src}
                alt={s.image.alt}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover object-[50%_20%]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-6 pb-6 pt-20 text-left text-cream">
                <span className="flex items-center gap-2 text-xs tracking-widest text-cream/80">
                  <Ic size={16} weight="light" aria-hidden="true" />
                  {num(i)} / {String(n).padStart(2, "0")}
                </span>
                <span className="display mt-2 block text-3xl md:text-4xl leading-tight">{s.title}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Tiêu đề + danh sách */}
      <div>
        <h2 className="display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Từ diện mạo đầu tiên đến khung hình cuối cùng.
        </h2>

        <ol className="mt-8 md:mt-10 border-t border-ink/15">
          {services.map((s, i) => {
            const on = i === active;
            const Ic = icons[i];
            return (
              <li key={s.title} className="border-b border-ink/15">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-expanded={on}
                  className="w-full py-5 md:py-6 grid grid-cols-[2rem_2.75rem_1fr] items-center gap-3 text-left"
                >
                  <span
                    className={`display text-2xl md:text-3xl leading-none transition-colors duration-300 ${
                      on ? "text-brown" : "text-ink/45"
                    }`}
                  >
                    {num(i)}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                      on ? "bg-brown text-cream" : "bg-beige text-ink/60"
                    }`}
                  >
                    <Ic size={20} weight="light" aria-hidden="true" />
                  </span>
                  <span
                    className={`display text-2xl md:text-3xl leading-tight transition-colors duration-300 ${
                      on ? "text-ink" : "text-ink/45"
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
                    <div className="sm:pl-[5.5rem] pb-6 md:pb-7">
                      <p className="max-w-md leading-7 text-ink-soft">{s.text}</p>
                      <Link
                        href={s.href}
                        className="mt-3 inline-flex items-center gap-2 underline underline-offset-4 hover:text-brown"
                      >
                        Tìm hiểu thêm
                        <ArrowRightIcon size={16} weight="light" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <Link
          href="/dich-vu"
          className="mt-8 inline-flex items-center gap-2 font-medium text-brown hover:underline underline-offset-4"
        >
          Xem đầy đủ dịch vụ và gói chụp
          <ArrowRightIcon size={18} weight="light" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
