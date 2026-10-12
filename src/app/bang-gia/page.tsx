import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, packages, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bảng giá và ưu đãi mùa cưới",
  description:
    "Giá và quyền lợi gói chụp ảnh cưới Muse Basic và Sài Gòn Basic tại Muse Bridal, ưu đãi mùa cưới giới hạn số lượng.",
};

const groups: { key: "outfits" | "crew" | "deliverables" | "extras"; label: string }[] = [
  { key: "outfits", label: "Trang phục và makeup" },
  { key: "crew", label: "Ekip đi cùng" },
  { key: "deliverables", label: "Sản phẩm bàn giao" },
  { key: "extras", label: "Thêm trong gói" },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-20">
      <h1 data-reveal className="display text-5xl md:text-7xl">Bảng giá</h1>
      <p className="mt-4 max-w-lg text-ink-soft leading-7">
        Giá trọn gói, đã gồm trang phục, makeup, ekip và sản phẩm in. Ưu đãi mùa cưới
        chỉ áp dụng cho 30 cặp đôi đầu tiên mỗi gói.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal-stagger>
        {packages.map((p) => (
          <section
            key={p.slug}
            id={p.slug}
            className="scroll-mt-24 border border-ink/30 bg-cream p-6 md:p-10"
          >
            <p className="text-sm text-ink-soft">{p.kind}</p>
            <h2 className="display text-5xl md:text-6xl mt-1">{p.name}</h2>
            <p className="mt-5 flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-medium text-brown">{formatPrice(p.price)}</span>
              {p.originalPrice && (
                <span className="text-ink-soft line-through">{formatPrice(p.originalPrice)}</span>
              )}
            </p>
            <p className="text-sm text-ink-soft">Giới hạn {p.seats} cặp đôi.</p>

            {groups.map((g) =>
              p[g.key].length ? (
                <div key={g.key} className="mt-7">
                  <h3 className="display-italic text-2xl">{g.label}</h3>
                  <ul className="mt-2 divide-y divide-line text-sm">
                    {p[g.key].map((item) => (
                      <li key={item} className="py-2 leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null,
            )}

            <Link
              href={`/lien-he?goi=${encodeURIComponent(p.name)}#dat-lich`}
              className="btn btn-primary mt-8 w-full sm:w-auto"
            >
              Đặt gói {p.name}
            </Link>
          </section>
        ))}
      </div>

      <section className="mt-16 max-w-2xl">
        <h2 className="display text-4xl">Điều kiện áp dụng</h2>
        <ul className="mt-4 leading-8 text-ink-soft">
          <li>Giá ưu đãi áp dụng khi đặt cọc giữ lịch trong thời gian chương trình.</li>
          <li>Mỗi gói giới hạn 30 cặp đôi, hết số lượng sẽ quay về giá niêm yết.</li>
          <li>Ngày chụp đổi được một lần nếu báo trước ít nhất 7 ngày.</li>
          <li>Chi phí phát sinh ngoài gói (địa điểm thu phí, thêm trang phục, thêm trang album) báo trước khi chụp.</li>
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          Cần báo giá cho yêu cầu riêng? Nhắn Zalo {site.phone}, Muse trả lời trong ngày.
        </p>
      </section>
    </div>
  );
}
