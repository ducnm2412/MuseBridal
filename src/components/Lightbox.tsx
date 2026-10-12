"use client";

import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import type { Photo } from "@/lib/data";

/**
 * Bọc một bộ ảnh và cấp hàm open(index) cho phần hiển thị.
 * Khi mở: ảnh lớn trên nền tối, nút trước/sau, phím mũi tên, Esc, vuốt ngang.
 */
export default function Lightbox({
  photos,
  children,
}: {
  photos: Photo[];
  children: (open: (index: number) => void) => ReactNode;
}) {
  const [idx, setIdx] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(
    () => setIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setIdx((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, prev, next]);

  const current = idx === null ? null : photos[idx];

  return (
    <>
      {children((i) => setIdx(i))}

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[90] bg-ink/95 flex items-center justify-center lightbox-in"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx > 50) prev();
            if (dx < -50) next();
            touchX.current = null;
          }}
        >
          <div
            className="relative w-[92vw] h-[82svh] md:w-[80vw] md:h-[86svh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              quality={90}
              sizes="92vw"
              className="object-contain lightbox-img"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-cream/80 whitespace-nowrap">
            {idx! + 1} / {photos.length}
          </p>

          <button
            type="button"
            aria-label="Đóng"
            onClick={close}
            className="absolute top-4 right-4 h-11 w-11 rounded-full border border-cream/40 text-cream flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
          >
            <XIcon size={20} weight="light" aria-hidden="true" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Ảnh trước"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-cream/40 text-cream flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
              >
                <CaretLeftIcon size={20} weight="light" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Ảnh sau"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-cream/40 text-cream flex items-center justify-center hover:bg-cream hover:text-ink transition-colors"
              >
                <CaretRightIcon size={20} weight="light" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
