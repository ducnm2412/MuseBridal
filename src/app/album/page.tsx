import type { Metadata } from "next";
import AlbumCard from "@/components/AlbumCard";
import { albums, type Album } from "@/lib/data";

export const metadata: Metadata = {
  title: "Album ảnh cưới",
  description:
    "Bộ sưu tập ảnh cưới phim trường và ngoại cảnh Sài Gòn của Muse Bridal, chia theo concept.",
};

/**
 * Bố cục tạp chí trên lưới 12 cột: lặp theo nhịp 4 ảnh,
 * to nhỏ và tỉ lệ khác nhau, một số ảnh hạ thấp để tạo nhịp.
 */
const pattern = [
  { col: "md:col-span-7", aspect: "aspect-[4/5]", offset: "", sizes: "(min-width: 768px) 58vw, 100vw", title: "text-3xl md:text-5xl" },
  { col: "md:col-span-5", aspect: "aspect-[3/4]", offset: "md:mt-24", sizes: "(min-width: 768px) 40vw, 100vw", title: "text-3xl md:text-4xl" },
  { col: "md:col-span-5", aspect: "aspect-[3/4]", offset: "", sizes: "(min-width: 768px) 40vw, 100vw", title: "text-3xl md:text-4xl" },
  { col: "md:col-span-7", aspect: "aspect-[4/3]", offset: "md:mt-16", sizes: "(min-width: 768px) 58vw, 100vw", title: "text-3xl md:text-5xl" },
];

function EditorialGrid({ items }: { items: Album[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:gap-x-8 md:gap-y-12" data-reveal-stagger>
      {items.map((a, i) => {
        const p = pattern[i % pattern.length];
        return (
          <AlbumCard
            key={a.slug}
            album={a}
            aspect={p.aspect}
            sizes={p.sizes}
            titleClass={p.title}
            className={`${p.col} ${p.offset}`}
          />
        );
      })}
    </div>
  );
}

export default function AlbumIndex() {
  const outdoor = albums.filter((a) => a.kind === "Ngoại cảnh");
  const studio = albums.filter((a) => a.kind === "Phim trường");

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr] items-end">
        <h1 className="display text-5xl md:text-7xl">Album</h1>
        <p className="max-w-md text-ink-soft leading-7 md:justify-self-end">
          Ảnh thật từ các cặp đôi đã chụp tại Muse. Chạm vào một bộ để xem trọn album.
        </p>
      </div>

      <section className="mt-14 md:mt-20">
        <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-line pb-4">
          <h2 className="display-italic text-3xl md:text-4xl">Ngoại cảnh Sài Gòn</h2>
          <span className="text-sm text-ink-soft">{outdoor.length} album</span>
        </div>
        <EditorialGrid items={outdoor} />
      </section>

      <section className="mt-20 md:mt-28">
        <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-line pb-4">
          <h2 className="display-italic text-3xl md:text-4xl">Phim trường Muse</h2>
          <span className="text-sm text-ink-soft">{studio.length} album</span>
        </div>
        <EditorialGrid items={studio} />
      </section>
    </div>
  );
}
