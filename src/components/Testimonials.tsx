import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
      {testimonials.map((t) => (
        <li key={t.names} className="flex gap-4 md:block">
          <div className="relative w-28 shrink-0 aspect-[3/4] md:w-full md:aspect-[4/5] overflow-hidden bg-beige">
            <Image
              src={t.photo.src}
              alt={t.photo.alt}
              fill
              sizes="(min-width: 768px) 30vw, 112px"
              className="object-cover"
            />
          </div>
          <blockquote className="md:mt-5">
            <p className="display-italic text-xl md:text-2xl leading-snug">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-ink-soft">
              {t.names}, album{" "}
              <Link href={`/album/${t.album.toLowerCase().replace(/ /g, "-")}`} className="underline underline-offset-4 hover:text-brown">
                {t.album}
              </Link>
            </footer>
          </blockquote>
        </li>
      ))}
    </ul>
  );
}
