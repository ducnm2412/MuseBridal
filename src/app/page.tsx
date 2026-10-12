import Image from "next/image";
import Link from "next/link";
import AlbumCard from "@/components/AlbumCard";
import PackageCard from "@/components/PackageCard";
import HeroSlides from "@/components/HeroSlides";
import ServicesShowcase from "@/components/ServicesShowcase";
import MomentsMosaic from "@/components/MomentsMosaic";
import Testimonials from "@/components/Testimonials";
import Marquee from "@/components/Marquee";
import { albums, moments, packages, site, steps } from "@/lib/data";

export default function Home() {
  // Ưu tiên ảnh 2048px để không bị mờ trên màn hình rộng
  const heroPhotos = [
    albums[0].photos[0],
    albums[5].photos[0],
    packages[0].image,
    albums[3].photos[0],
  ];
  const featured = albums.slice(0, 6);

  return (
    <>
      {/* Hero kiểu tạp chí: nền kem, chữ bên trái, ảnh dọc bên phải kèm ảnh nhỏ chồng lệch */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-6 overflow-hidden md:h-[100svh] md:min-h-[640px]">
        <div className="mx-auto max-w-6xl px-4 md:px-6 h-full grid gap-6 md:gap-10 md:grid-cols-[1fr_1fr] md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="hero-step hidden md:block text-sm text-ink-soft" style={{ "--i": 0 } as React.CSSProperties}>
              Studio ảnh cưới tại Sài Gòn
            </p>
            {/* Tiêu đề hiện từng chữ, mỗi chữ trễ hơn chữ trước 60ms */}
            <h1 className="display text-[clamp(1.6rem,8.4vw,2.4rem)] leading-[1.08] sm:text-6xl md:text-[clamp(3.4rem,9.5vh,7rem)] mt-3 whitespace-nowrap sm:whitespace-normal">
              {"Ảnh cưới của hai bạn,".split(" ").map((w, i) => (
                <span key={i} className="hero-word" style={{ "--i": i } as React.CSSProperties}>
                  {w}{" "}
                </span>
              ))}
              <br />
              <span className="display-italic text-brown">
                {"kể theo cách của Muse.".split(" ").map((w, i) => (
                  <span key={i} className="hero-word" style={{ "--i": i + 5 } as React.CSSProperties}>
                    {w}{" "}
                  </span>
                ))}
              </span>
            </h1>
            <p className="hero-step mt-4 md:mt-[clamp(0.75rem,2vh,1.5rem)] max-w-lg text-base md:text-lg leading-7 md:leading-8 text-ink-soft">
              <span className="md:hidden">
                Phim trường hoặc ngoại cảnh Sài Gòn, trọn gói từ váy đến album.
              </span>
              <span className="hidden md:inline">
                Chụp phim trường hoặc ngoại cảnh, trọn gói váy cưới thiết kế,
                veston, makeup và album in. Ekip ba người đi cùng cả buổi.
              </span>
            </p>
            <div className="hero-step mt-6 md:mt-[clamp(1rem,2.5vh,2rem)] flex flex-wrap gap-3" style={{ "--i": 12 } as React.CSSProperties}>
              <Link href="/lien-he#dat-lich" className="btn btn-primary">
                Đặt lịch chụp
              </Link>
              <Link href="/album" className="btn btn-outline">
                Xem album
              </Link>
            </div>
            <ul style={{ "--i": 14 } as React.CSSProperties} className="hero-step hidden md:flex mt-8 md:mt-[clamp(1rem,3vh,2.5rem)] [@media(max-height:720px)]:md:hidden flex-wrap gap-x-8 gap-y-2 text-sm text-ink-soft">
              <li>Phim trường riêng</li>
              <li>Ngoại cảnh toàn Sài Gòn</li>
              <li>Photographer, Makeup Artist, Stylist</li>
            </ul>
          </div>

          <div className="relative hero-media w-full order-1 md:order-2 md:h-[calc(100svh-7.5rem)] md:min-h-[520px]">
            <HeroSlides
              photos={heroPhotos}
              className="aspect-[4/5] md:aspect-auto md:h-full md:w-full"
              sizes="(min-width: 768px) 50vw, 100vw"
              thumb
            />
          </div>
        </div>
      </section>

      {/* Giới thiệu ngắn + dải ảnh khảm tràn lề */}
      <section className="pt-16 md:pt-24 pb-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-6 md:grid-cols-[1fr_1fr] items-end mb-10 md:mb-14">
          <h2 data-reveal className="display text-4xl md:text-6xl">
            Mỗi cặp đôi một concept.
          </h2>
          <p className="max-w-md text-ink-soft leading-7 md:justify-self-end">
            Phim trường riêng, ekip ba người đi cùng cả buổi, trọn gói từ váy
            đến album.
          </p>
        </div>
        <div data-reveal>
          <MomentsMosaic photos={moments} />
        </div>
      </section>

      {/* Album theo concept */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <h2 data-reveal className="display text-4xl md:text-6xl">
              Album theo concept
            </h2>
            <p className="mt-3 max-w-md text-ink-soft leading-7">
              Mỗi bộ ảnh là một concept riêng, từ phim trường tối giản đến góc
              phố Sài Gòn.
            </p>
          </div>
          <Link
            href="/album"
            className="hidden md:inline-block underline underline-offset-4 hover:text-brown"
          >
            Xem tất cả album
          </Link>
        </div>
        <div className="mx-auto max-w-6xl md:px-6">
          <div className="snap-row" data-reveal-stagger>
            {featured.map((a) => (
              <AlbumCard key={a.slug} album={a} />
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 mt-8 md:hidden">
          <Link href="/album" className="btn btn-outline w-full">
            Xem tất cả album
          </Link>
        </div>
      </section>

      <Marquee />

      {/* Hai gói chụp */}
      <section className="bg-beige/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 data-reveal className="display text-4xl md:text-6xl">
              Hai gói chụp mùa cưới
            </h2>
            <p className="mt-3 text-ink-soft leading-7">
              Mỗi gói chỉ nhận 30 cặp đôi với mức giá ưu đãi. Giá đã gồm trang
              phục, makeup, ekip và toàn bộ sản phẩm bàn giao.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2" data-reveal-stagger>
            {packages.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Ưu đãi áp dụng theo số lượng còn lại trong mùa.{" "}
            <Link href="/bang-gia" className="underline underline-offset-4">
              Xem quyền lợi chi tiết
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Dịch vụ: danh sách chọn, ảnh lớn đổi theo mục */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 data-reveal className="display text-4xl md:text-6xl">
              Muse làm gì cho ngày chụp
            </h2>
            <p className="mt-3 text-ink-soft leading-7">
              Chạm vào từng mục để xem. Mọi thứ nằm trong một gói.
            </p>
          </div>
          <div data-reveal>
            <ServicesShowcase />
          </div>
        </div>
      </section>

      {/* Phim trường và trang phục: hai ảnh lớn cạnh nhau */}
      <section className="py-16 md:py-24 bg-beige/50">
        <div
          className="mx-auto max-w-6xl px-4 md:px-6 grid gap-10 md:grid-cols-2 md:gap-6"
          data-reveal-stagger
        >
          <Link href="/dich-vu#phim-truong" className="group block">
            <div
              className="relative aspect-[4/5] overflow-hidden bg-beige"
              data-parallax="0.1"
            >
              <Image
                src="/portfolio/blooming-love-1.jpg"
                alt="Bối cảnh hoa đỏ trong phim trường Muse"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="display text-3xl md:text-4xl mt-4">
              Phim trường Muse
            </h3>
            <p className="mt-2 text-ink-soft leading-7 max-w-md">
              Nhiều bối cảnh dựng sẵn, ánh sáng chủ động, thay đồ ngay tại chỗ.
              Chụp được cả ngày mưa.
            </p>
          </Link>
          <Link href="/dich-vu#trang-phuc" className="group block md:mt-16">
            <div
              className="relative aspect-[4/5] overflow-hidden bg-beige"
              data-parallax="0.1"
            >
              <Image
                src="/portfolio/calla-3.jpg"
                alt="Váy cưới cúp ngực bên rèm trắng"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="display text-3xl md:text-4xl mt-4">
              Váy cưới thiết kế và veston
            </h3>
            <p className="mt-2 text-ink-soft leading-7 max-w-md">
              Bộ sưu tập riêng của Muse, thử trước ngày chụp cùng Stylist. Phụ
              kiện và hoa cầm tay tặng kèm.
            </p>
          </Link>
        </div>
      </section>

      {/* Lời kể từ các cặp đôi */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2
            data-reveal
            className="display text-4xl md:text-6xl mb-10 md:mb-14"
          >
            Các cặp đôi kể lại
          </h2>
          <div data-reveal>
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Quy trình: nội dung là chuỗi bước nên có đánh số */}
      <section className="bg-blush/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 data-reveal className="display text-4xl md:text-6xl">
              Từ tin nhắn đầu tiên đến album
            </h2>
            <p className="mt-3 text-ink-soft leading-7 max-w-sm">
              Năm bước, Muse lo phần việc ở giữa. Hai bạn chỉ cần đến đúng giờ
              và vui.
            </p>
          </div>
          <ol className="grid gap-6" data-reveal-stagger>
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ink/20 pt-5"
              >
                <span className="display-italic text-3xl leading-none text-brown">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-ink-soft">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Instagram: ba tấm ảnh in xếp lệch nhau trên nền be */}
      <section className="bg-beige/60 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6 grid gap-12 md:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <h2 data-reveal className="display text-4xl md:text-6xl">
              Mỗi tuần một bộ ảnh mới trên Instagram
            </h2>
            <p className="mt-4 max-w-md text-ink-soft leading-7">
              Hậu trường buổi chụp, váy mới về và ảnh của các cặp đôi vừa nhận
              album. Theo dõi để xem concept nào sắp ra mắt.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline mt-7"
            >
              Theo dõi @musebridalsaigon
            </a>
          </div>
          <div
            className="relative h-[22rem] sm:h-[26rem] md:h-[30rem]"
            data-reveal-stagger
          >
            {[
              {
                src: "/portfolio/calla-4.jpg",
                alt: "Những ly rượu chạm nhau trước cô dâu",
                cls: "left-0 top-6 -rotate-6 z-10",
              },
              {
                src: "/portfolio/garden-toast-2.jpg",
                alt: "Cặp đôi đứng cạnh bàn tiệc trắng",
                cls: "left-1/2 -translate-x-1/2 top-0 rotate-2 z-20",
              },
              {
                src: "/portfolio/serene-love-3.jpg",
                alt: "Toàn cảnh cặp đôi giữa vườn cây",
                cls: "right-0 top-10 rotate-6 z-10",
              },
            ].map((ph) => (
              <a
                key={ph.src}
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className={`absolute w-[46%] sm:w-[42%] bg-cream p-2 pb-8 shadow-[0_14px_40px_rgba(43,33,28,0.18)] transition-transform duration-500 hover:z-30 hover:scale-[1.04] hover:rotate-0 ${ph.cls}`}
              >
                <span className="relative block aspect-[3/4] overflow-hidden bg-beige">
                  <Image
                    src={ph.src}
                    alt={ph.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 45vw"
                    className="object-cover"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Lời mời */}
      <section className="relative">
        <div
          className="relative h-[70svh] min-h-[420px] bg-beige"
          data-parallax="0.15"
        >
          <Image
            src="/portfolio/our-journey-1.jpg"
            alt="Cô dâu quay lại nhìn giữa rừng thông"
            fill
            sizes="100vw"
            className="object-cover object-[50%_25%]"
          />
          <div className="absolute inset-0 bg-ink/45" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-4 md:px-6 text-cream">
            <p className="display text-4xl sm:text-5xl md:text-7xl max-w-3xl">
              Kể cho Muse nghe ngày cưới của hai bạn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/lien-he#dat-lich" className="btn btn-primary">
                Đặt lịch chụp
              </Link>
              <a
                href={site.zalo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-light"
              >
                Nhắn Zalo {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
