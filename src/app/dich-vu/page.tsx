import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import { packages, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dịch vụ chụp ảnh cưới",
  description:
    "Chụp ảnh cưới phim trường và ngoại cảnh Sài Gòn, váy cưới thiết kế, veston, makeup, album và ảnh cổng tại Muse Bridal.",
};

const blocks = [
  {
    id: "phim-truong",
    title: "Chụp ảnh cưới phim trường",
    short: "Bối cảnh dựng sẵn, ánh sáng chủ động, không lo thời tiết.",
    points: [
      "Nền trắng tối giản, hoa tươi, bình phong gỗ cho áo dài, rèm voan, ánh sáng cửa sổ",
      "Thay trang phục ngay tại chỗ, Stylist chỉnh lại sau mỗi lần thay",
      "Phù hợp lịch chụp buổi tối hoặc mùa mưa",
    ],
    image: { src: "/portfolio/blooming-love-1.jpg", alt: "Cặp đôi bên bãi hoa đỏ trong studio" },
    pkg: packages[0],
  },
  {
    id: "ngoai-canh",
    title: "Chụp ảnh cưới ngoại cảnh Sài Gòn",
    short: "Công viên, rừng thông, biệt thự sân vườn hay trung tâm quận 1.",
    points: [
      "Muse gợi ý địa điểm theo concept và giờ sáng đẹp",
      "Ekip di chuyển cùng hai bạn cả buổi",
      "Gói Sài Gòn Basic được tặng phí xe một buổi chụp",
    ],
    image: { src: "/portfolio/power-of-love-1.jpg", alt: "Cặp đôi đi giữa phố Sài Gòn" },
    pkg: packages[1],
  },
  {
    id: "trang-phuc",
    title: "Váy cưới thiết kế và veston",
    short: "Bộ sưu tập riêng của Muse, thử trước ngày chụp.",
    points: [
      "Váy cúp ngực, tay dài, đuôi cá, váy ngắn và áo dài cưới",
      "Veston cao cấp nhiều màu cho chú rể",
      "Phụ kiện, voan và hoa lụa cầm tay tặng kèm trong gói",
    ],
    image: { src: "/portfolio/calla-3.jpg", alt: "Váy cưới cúp ngực bên rèm trắng" },
  },
  {
    id: "makeup",
    title: "Makeup, làm tóc và styling",
    short: "Makeup Artist và Stylist đi cùng suốt buổi chụp.",
    points: [
      "Trang điểm theo concept và ánh sáng của từng bối cảnh",
      "Giữ nét tự nhiên trên ảnh, chỉnh lại sau mỗi lần thay đồ",
      "Stylist phối trang phục, phụ kiện và tư thế cho đồng nhất",
    ],
    image: { src: "/portfolio/calla-2.jpg", alt: "Cô dâu cười giữa những cánh tay nâng ly" },
  },
  {
    id: "san-pham",
    title: "Album, ảnh cổng, ảnh lụa và slide tiệc",
    short: "Mọi gói đều bàn giao trọn bộ sản phẩm in.",
    points: [
      "1 album in cao cấp 20 trang, 1 ảnh cổng ép gỗ",
      "5 ảnh lụa để bàn, 1 slide trình chiếu cho tiệc cưới",
      "Ảnh chỉnh gửi online để chọn trước khi in, đặt thêm trang được",
    ],
    image: { src: "/portfolio/our-journey-3.jpg", alt: "Trang album in Our Journey" },
  },
];

export default function Services() {
  const [first, ...rest] = blocks;

  return (
    <div>
      {/* Đầu trang gọn */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-10 md:pt-16">
        <h1 className="display text-5xl md:text-7xl">Dịch vụ</h1>
        <p className="mt-3 max-w-md text-ink-soft leading-7">
          Muse làm trọn gói từ concept, trang phục, makeup đến album in. Hai bạn chỉ
          cần chọn phim trường hay ngoại cảnh.
        </p>
      </div>

      {/* Thẻ nổi bật nền nâu đen: dịch vụ chính, ảnh bên phải */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 md:mt-14">
        <section
          id={first.id}
          data-reveal
          className="scroll-mt-24 grid md:grid-cols-[1fr_1.1fr] bg-ink text-cream overflow-hidden"
        >
          <div className="p-7 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <p className="text-sm text-cream/70">Dịch vụ chính</p>
            <h2 className="display text-4xl md:text-5xl mt-2">{first.title}</h2>
            <p className="mt-3 text-cream/80 leading-7">{first.short}</p>
            <ul className="mt-5 text-sm leading-7 text-cream/80 list-disc pl-5 marker:text-blush">
              {first.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/bang-gia#${first.pkg!.slug}`} className="btn btn-primary">
                Xem gói {first.pkg!.name}
              </Link>
              <Link href="/album" className="btn btn-light">
                Xem album phim trường
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[32rem] order-1 md:order-2" data-parallax="0.08">
            <Image
              src={first.image.src}
              alt={first.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>
      </div>

      {/* Bốn dịch vụ còn lại: thẻ catalogue 2 cột, tiêu đề đặt trên ảnh */}
      <div
        className="mx-auto max-w-6xl px-4 md:px-6 mt-6 md:mt-8 grid gap-6 md:grid-cols-2"
        data-reveal-stagger
      >
        {rest.map((b) => (
          <section key={b.id} id={b.id} className="scroll-mt-24 group bg-cream border border-line">
            <div className="relative aspect-[4/3] overflow-hidden bg-beige">
              <Image
                src={b.image.src}
                alt={b.image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 md:p-6 pt-16">
                <h2 className="display text-3xl md:text-4xl text-cream">{b.title}</h2>
              </div>
            </div>
            <div className="p-5 md:p-6">
              <p className="leading-7">{b.short}</p>
              <ul className="mt-3 text-sm leading-7 text-ink-soft list-disc pl-5 marker:text-brown">
                {b.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              {b.pkg && (
                <Link
                  href={`/bang-gia#${b.pkg.slug}`}
                  className="mt-4 inline-block underline underline-offset-4 hover:text-brown"
                >
                  Xem gói {b.pkg.name}
                </Link>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Gói chụp */}
      <section className="bg-beige/60 mt-16 md:mt-24 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-4xl md:text-5xl">Gói chụp</h2>
            <Link href="/bang-gia" className="underline underline-offset-4 hover:text-brown">
              So sánh đầy đủ quyền lợi hai gói
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2" data-reveal-stagger>
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Cần gói riêng? Nhắn Zalo {site.phone}, Muse báo giá trong ngày.
          </p>
        </div>
      </section>
    </div>
  );
}
