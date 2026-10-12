import Image from "next/image";
import Link from "next/link";
import type { Album } from "@/lib/data";

export default function AlbumCard({
  album,
  sizes = "(min-width: 768px) 33vw, 78vw",
  aspect = "aspect-[3/4]",
  className = "",
  titleClass = "text-2xl md:text-3xl",
}: {
  album: Album;
  sizes?: string;
  aspect?: string;
  className?: string;
  titleClass?: string;
}) {
  return (
    <Link href={`/album/${album.slug}`} className={`group block ${className}`}>
      <div className={`relative ${aspect} overflow-hidden bg-beige`}>
        <Image
          src={album.cover.src}
          alt={album.cover.alt}
          fill
          sizes={sizes}
          className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0">
        <span className={`display ${titleClass}`}>{album.title}</span>
        <span className="text-xs text-ink-soft whitespace-nowrap">{album.kind}</span>
      </div>
      <p className="mt-1 text-sm text-ink-soft">{album.summary}</p>
    </Link>
  );
}
