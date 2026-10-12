"use client";

import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import type { ReactNode } from "react";
import type { Photo } from "@/lib/data";

/** Phần đầu album (giới thiệu + ảnh bìa) và lưới masonry các ảnh còn lại, bấm để xem lớn. */
export default function AlbumPhotos({
  photos,
  intro,
}: {
  photos: Photo[];
  intro: ReactNode;
}) {
  const [cover, ...rest] = photos;
  return (
    <Lightbox photos={photos}>
      {(open) => (
        <>
          <header className="mx-auto max-w-6xl px-4 md:px-6 pt-6 md:pt-10 grid gap-6 md:grid-cols-[1fr_1.1fr] md:gap-12 items-center">
            {intro}
            <button
              type="button"
              onClick={() => open(0)}
              aria-label={`Xem lớn: ${cover.alt}`}
              className="album-cover relative block w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-beige cursor-zoom-in"
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                quality={85}
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </button>
          </header>

          {rest.length > 0 && (
            <div className="album-grid mx-auto max-w-6xl px-4 md:px-6 mt-6 md:mt-12 columns-1 sm:columns-2 gap-4 md:gap-6 [&>button]:mb-4 md:[&>button]:mb-6 [&>button]:break-inside-avoid">
              {rest.map((ph, i) => (
                <button
                  type="button"
                  key={ph.src}
                  onClick={() => open(i + 1)}
                  aria-label={`Xem lớn: ${ph.alt}`}
                  className="block w-full group overflow-hidden cursor-zoom-in"
                >
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    width={ph.w}
                    height={ph.h}
                    quality={85}
                    sizes="(min-width: 1152px) 560px, (min-width: 640px) 50vw, 100vw"
                    className="w-full h-auto bg-beige transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </Lightbox>
  );
}
