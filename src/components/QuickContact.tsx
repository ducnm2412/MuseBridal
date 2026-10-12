import { MessengerLogoIcon, PhoneIcon } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/data";
import ScrollTop from "@/components/ScrollTop";

/** Cột nút nổi góc dưới phải: lên đầu trang, Zalo, Messenger, gọi điện. */
export default function QuickContact() {
  const base =
    "h-12 w-12 rounded-full flex items-center justify-center text-cream shadow-[0_6px_20px_rgba(43,33,28,0.25)]";

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2">
      <ScrollTop />
      <a
        href={site.zalo}
        target="_blank"
        rel="noreferrer"
        aria-label="Nhắn Zalo"
        title="Nhắn Zalo"
        className={`${base} bg-[#0068ff] text-[13px] font-medium tracking-wide`}
      >
        Zalo
      </a>
      <a
        href={site.messenger}
        target="_blank"
        rel="noreferrer"
        aria-label="Nhắn Messenger"
        title="Nhắn Messenger"
        className={`${base} bg-brown`}
      >
        <MessengerLogoIcon size={22} weight="light" aria-hidden="true" />
      </a>
      <a
        href={site.phoneHref}
        aria-label={`Gọi ${site.phone}`}
        title={`Gọi ${site.phone}`}
        className={`${base} bg-ink`}
      >
        <PhoneIcon size={22} weight="light" aria-hidden="true" />
      </a>
    </div>
  );
}
