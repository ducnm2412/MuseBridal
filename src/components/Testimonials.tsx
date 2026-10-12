import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/data";

const albumHref = (title: string) => `/album/${title.toLowerCase().replace(/ /g, "-")}`;

/** Một lời kể lớn bên trái, hai lời kể nhỏ xếp dọc bên phải. */
export default function Testimonials() {
  const [first, ...rest] = testimonials;

  return (
    <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
      <figure className="grid gap-5 sm:grid-cols-[42%_1fr] sm:items-end">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src={first.photo.src}
            alt={first.photo.alt}
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            className="object-cover"
          />
        </div>
        <blockquote>
          <p className="display-italic text-2xl md:text-3xl leading-snug">“{first.quote}”</p>
          <figcaption className="mt-4 text-sm text-ink-soft">
            {first.names}, album{" "}
            <Link href={albumHref(first.album)} className="underline underline-offset-4 hover:text-brown">
              {first.album}
            </Link>
          </figcaption>
        </blockquote>
      </figure>

      <div className="grid gap-8 content-start">
        {rest.map((t) => (
          <figure key={t.names} className="flex gap-4 border-t border-ink/20 pt-6">
            <div className="relative w-20 shrink-0 aspect-[3/4] overflow-hidden bg-beige">
              <Image
                src={t.photo.src}
                alt={t.photo.alt}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <blockquote>
              <p className="display-italic text-lg md:text-xl leading-snug">“{t.quote}”</p>
              <figcaption className="mt-2 text-sm text-ink-soft">
                {t.names}, album{" "}
                <Link href={albumHref(t.album)} className="underline underline-offset-4 hover:text-brown">
                  {t.album}
                </Link>
              </figcaption>
            </blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
}
