import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AlbumPhotos from "@/components/AlbumPhotos";
import { albums, getAlbum, site } from "@/lib/data";

export function generateStaticParams() {
  return albums.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/album/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbum(slug);
  if (!album) return {};
  return {
    title: `${album.title}, ${album.kind.toLowerCase()}`,
    description: album.summary,
    openGraph: { images: [album.cover.src] },
  };
}

export default async function AlbumDetail({
  params,
}: PageProps<"/album/[slug]">) {
  const { slug } = await params;
  const album = getAlbum(slug);
  if (!album) notFound();

  const idx = albums.findIndex((a) => a.slug === slug);
  const next = albums[(idx + 1) % albums.length];
  const prev = albums[(idx - 1 + albums.length) % albums.length];

  return (
    <article>
      {/* Đầu trang: chữ bên trái, ảnh bìa bên phải, gọn trong một màn hình */}
      <AlbumPhotos
        photos={album.photos}
        intro={
          <div>
            <nav className="text-sm text-ink-soft flex gap-2">
              <Link href="/album" className="hover:text-brown">
                Album
              </Link>
              <span aria-hidden="true">/</span>
              <span>{album.kind}</span>
            </nav>
            <h1 className="display text-5xl md:text-7xl mt-3">{album.title}</h1>
            <p className="mt-2 text-ink-soft">{album.place}</p>
            <p className="mt-5 max-w-md leading-7">{album.story}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/lien-he#dat-lich" className="btn btn-primary">
                Chụp concept này
              </Link>
              <a
                href={site.zalo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Hỏi nhanh qua Zalo
              </a>
            </div>
          </div>
        }
      />

      {/* Điều hướng album trước / sau */}
      <nav
        aria-label="Album khác"
        className="mx-auto max-w-6xl px-4 md:px-6 py-14 md:py-20 grid grid-cols-2 gap-4 md:gap-6 border-t border-line mt-6"
      >
        {[
          { a: prev, label: "Album trước", align: "" },
          {
            a: next,
            label: "Album tiếp theo",
            align: "text-right justify-self-end",
          },
        ].map(({ a, label, align }) => (
          <Link
            key={a.slug}
            href={`/album/${a.slug}`}
            className={`group block w-full max-w-xs ${align}`}
          >
            <p className="text-sm text-ink-soft mb-2">{label}</p>
            <div className="relative aspect-[4/3] overflow-hidden bg-beige">
              <Image
                src={a.cover.src}
                alt={a.cover.alt}
                fill
                sizes="(min-width: 768px) 320px, 45vw"
                className="object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <p className="display text-2xl md:text-3xl mt-2">{a.title}</p>
          </Link>
        ))}
      </nav>
    </article>
  );
}
