import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/data";

const pages = [
  { href: "/album", label: "Album" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/bang-gia", label: "Bảng giá" },
  { href: "/lien-he", label: "Đặt lịch chụp" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-14">
        {/* Hàng đầu: logo và lời mời ngắn, nút gọi ở bên phải trên desktop */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Image
            src="/brand/logo-white.png"
            alt="Muse Bridal"
            width={1200}
            height={600}
            className="h-10 md:h-12 w-auto"
          />
          <a href={site.phoneHref} className="btn btn-light min-h-11 px-5 text-sm">
            Gọi {site.phone}
          </a>
        </div>

        {/* Hai cột gọn trên điện thoại, ba cột trên desktop */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 text-sm leading-7">
          <div>
            <p className="display-italic text-xl md:text-2xl mb-2">Studio</p>
            <p className="text-cream/75">{site.address}</p>
            <p className="text-cream/75">{site.hours}</p>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block underline underline-offset-4 hover:text-blush"
            >
              Chỉ đường
            </a>
          </div>

          <div>
            <p className="display-italic text-xl md:text-2xl mb-2">Theo dõi</p>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="block hover:text-blush">
              Facebook
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="block hover:text-blush">
              Instagram
            </a>
            <a href={site.zalo} target="_blank" rel="noreferrer" className="block hover:text-blush">
              Zalo
            </a>
          </div>

          <nav aria-label="Chân trang" className="col-span-2 md:col-span-1">
            <p className="display-italic text-xl md:text-2xl mb-2">Trang</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 md:flex-col">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="hover:text-blush">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-wrap justify-between gap-x-6 gap-y-1 text-xs text-cream/60">
          <a href={`mailto:${site.email}`} className="hover:text-blush">
            {site.email}
          </a>
          <p>Muse Bridal. Hình ảnh thuộc bản quyền của studio và các cặp đôi.</p>
        </div>
      </div>
    </footer>
  );
}
