import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Package } from "@/lib/data";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="bg-cream border border-line grid sm:grid-cols-[40%_1fr]">
      <div className="relative aspect-[4/5] sm:aspect-auto bg-beige">
        <Image
          src={pkg.image.src}
          alt={pkg.image.alt}
          fill
          sizes="(min-width: 768px) 20vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col">
        <p className="text-sm text-ink-soft">{pkg.kind}</p>
        <h3 className="display text-4xl md:text-5xl mt-1">{pkg.name}</h3>
        <p className="mt-4 flex items-baseline gap-3 flex-wrap">
          <span className="text-2xl font-medium text-brown">{formatPrice(pkg.price)}</span>
          {pkg.originalPrice && (
            <span className="text-ink-soft line-through">{formatPrice(pkg.originalPrice)}</span>
          )}
        </p>
        <p className="text-sm text-ink-soft">Còn nhận {pkg.seats} cặp đôi trong mùa này.</p>
        <p className="mt-4 text-sm leading-7">{pkg.lead}</p>
        <ul className="mt-4 text-sm leading-7 text-ink-soft">
          {pkg.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="mt-auto pt-6 flex flex-wrap gap-3">
          <Link
            href={`/lien-he?goi=${encodeURIComponent(pkg.name)}#dat-lich`}
            className="btn btn-primary"
          >
            Đặt gói {pkg.name}
          </Link>
          <Link href={`/bang-gia#${pkg.slug}`} className="btn btn-outline">
            Xem quyền lợi
          </Link>
        </div>
      </div>
    </article>
  );
}
