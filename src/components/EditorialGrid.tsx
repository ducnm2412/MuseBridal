"use client";

import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import type { Photo } from "@/lib/data";

/** Vị trí từng ảnh trên lưới 12 cột, xen kẽ ngang và dọc như một trang tạp chí. */
const cells = [
  "md:col-span-7 aspect-[16/10]",
  "md:col-span-5 aspect-[4/5]",
  "md:col-span-3 aspect-[3/5] md:mt-12",
  "md:col-span-5 aspect-[4/3] md:mt-24",
  "md:col-span-4 aspect-[3/5]",
  "md:col-span-8 aspect-[16/9]",
  "md:col-span-4 aspect-[16/10] md:mt-16",
];

export default function EditorialGrid({ photos }: { photos: Photo[] }) {
  const shown = photos.slice(0, cells.length);
  return (
    <Lightbox photos={shown}>
      {(open) => (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-6 items-start" data-reveal-stagger>
          {shown.map((ph, i) => (
            <button
              key={ph.src}
              type="button"
              onClick={() => open(i)}
              aria-label={`Xem ảnh: ${ph.alt}`}
              className={`relative w-full overflow-hidden bg-beige cursor-zoom-in ${cells[i]} ${
                i === 0 || i === 5 || i === 6 ? "col-span-2" : ""
              }`}
            >
              <Image
                src={ph.src}
                alt={ph.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      )}
    </Lightbox>
  );
}
