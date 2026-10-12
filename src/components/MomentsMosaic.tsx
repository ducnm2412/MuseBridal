"use client";

import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import type { Photo } from "@/lib/data";

// Nhịp chiều cao: 10 ảnh đầu lấp đúng 2 hàng 6 cột, 6 ảnh sau lấp hàng thứ ba. Tối đa 16 ảnh.
const spans = [
  "row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1",
  "row-span-1", "row-span-1", "row-span-1", "row-span-1",
  "row-span-1", "row-span-1", "row-span-1", "row-span-1", "row-span-1", "row-span-1",
];

/**
 * Dải ảnh khảm: trên desktop trải đủ 6 cột, trên điện thoại tự chạy ngang
 * (dải được nhân đôi để nối liền), chạm giữ để dừng. Bấm để xem lớn.
 */
export default function MomentsMosaic({ photos: all }: { photos: Photo[] }) {
  const photos = all.slice(0, spans.length);
  const grid = (open: (i: number) => void, hidden = false) => (
    <div className="mosaic" aria-hidden={hidden || undefined}>
      {photos.map((ph, i) => (
        <button
          type="button"
          key={ph.src}
          onClick={() => open(i)}
          tabIndex={hidden ? -1 : undefined}
          aria-label={`Xem lớn: ${ph.alt}`}
          className={`mosaic-item relative overflow-hidden bg-beige group cursor-zoom-in ${spans[i % spans.length]}`}
        >
          <Image
            src={ph.src}
            alt={ph.alt}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 70vw"
            className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </button>
      ))}
    </div>
  );

  return (
    <Lightbox photos={photos}>
      {(open) => (
        <div className="mosaic-viewport">
          <div className="mosaic-track">
            {grid(open)}
            <div className="lg:hidden contents">{grid(open, true)}</div>
          </div>
        </div>
      )}
    </Lightbox>
  );
}
