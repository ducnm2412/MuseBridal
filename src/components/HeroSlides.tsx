"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Photo } from "@/lib/data";

/** Khung ảnh chuyển cảnh mờ dần, dùng trong hero. Dừng khi người dùng giảm chuyển động. */
export default function HeroSlides({
  photos,
  interval = 5000,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
  thumb = false,
}: {
  photos: Photo[];
  interval?: number;
  className?: string;
  sizes?: string;
  /** Hiện ảnh nhỏ chồng lệch góc dưới trái, là ảnh kế tiếp của ảnh lớn */
  thumb?: boolean;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % photos.length),
      interval,
    );
    return () => clearInterval(t);
  }, [photos.length, interval]);

  const nextIdx = (idx + 1) % photos.length;

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 overflow-hidden bg-beige">
        {photos.map((ph, i) => (
          <div
            key={ph.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== idx}
          >
            <Image
              src={ph.src}
              alt={ph.alt}
              fill
              priority={i === 0}
              quality={90}
              sizes={sizes}
              className={`object-cover object-[50%_20%] ${i === idx ? "hero-zoom" : ""}`}
            />
          </div>
        ))}

        <div className="absolute bottom-4 right-4 flex gap-2">
          {photos.map((ph, i) => (
            <button
              key={ph.src}
              type="button"
              aria-label={`Ảnh ${i + 1}`}
              aria-current={i === idx}
              onClick={() => setIdx(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === idx ? "w-8 bg-cream" : "w-4 bg-cream/50"
              }`}
            />
          ))}
        </div>
      </div>

      {thumb && photos.length > 1 && (
        <button
          type="button"
          onClick={() => setIdx(nextIdx)}
          aria-label={`Xem ảnh kế tiếp: ${photos[nextIdx].alt}`}
          className="absolute left-3 md:-left-14 bottom-6 md:bottom-10 w-[38%] md:w-[34%] aspect-[3/4] overflow-hidden bg-beige border-[6px] border-cream shadow-[0_18px_40px_rgba(43,33,28,0.2)] transition-transform duration-500 hover:scale-[1.03]"
        >
          {photos.map((ph, i) => (
            <Image
              key={ph.src}
              src={ph.src}
              alt={ph.alt}
              fill
              sizes="(min-width: 768px) 12rem, 38vw"
              className={`object-cover object-[50%_20%] transition-opacity duration-[1600ms] ${i === nextIdx ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== nextIdx}
            />
          ))}
        </button>
      )}
    </div>
  );
}
