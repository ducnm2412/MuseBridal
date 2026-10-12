import { site } from "@/lib/data";
import ScrollTop from "@/components/ScrollTop";

/** Cột nút nổi góc dưới phải: lên đầu trang, Zalo, Messenger, gọi điện. */
export default function QuickContact() {
  const items = [
    {
      href: site.zalo,
      label: "Nhắn Zalo",
      bg: "bg-[#0068ff]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 5.9 2 10.7c0 2.7 1.4 5.1 3.6 6.7L5 21l4-2c1 .2 2 .4 3 .4 5.5 0 10-3.9 10-8.7S17.5 2 12 2Zm-4.2 11.3H5.9c-.4 0-.6-.3-.6-.6 0-.2.1-.3.2-.4l2.4-3.4H6.3c-.3 0-.6-.2-.6-.5s.3-.5.6-.5h2c.4 0 .6.3.6.6 0 .1 0 .3-.1.4l-2.4 3.4h1.4c.3 0 .6.2.6.5s-.3.5-.6.5Zm2.3-.1c0 .3-.3.6-.6.6s-.6-.3-.6-.6V8.5c0-.3.3-.6.6-.6s.6.3.6.6v4.7Zm4.2 0c0 .3-.3.6-.6.6-.2 0-.4-.1-.5-.3-.3.2-.7.3-1.1.3-1.1 0-2-.9-2-2s.9-2 2-2c.4 0 .8.1 1.1.3.1-.2.3-.3.5-.3.3 0 .6.3.6.6v2.8Zm2.7.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
          />
        </svg>
      ),
    },
    {
      href: site.messenger,
      label: "Nhắn Messenger",
      bg: "bg-[#8c5f45]",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2C6.5 2 2 6.1 2 11.3c0 2.9 1.4 5.5 3.6 7.2V22l3.4-1.9c.9.3 1.9.4 3 .4 5.5 0 10-4.1 10-9.3S17.5 2 12 2Zm1 12.5-2.6-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7-5.4 5.8Z"
          />
        </svg>
      ),
    },
    {
      href: site.phoneHref,
      label: `Gọi ${site.phone}`,
      bg: "bg-ink",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2">
      <ScrollTop />
      {items.map((it) => (
        <a
          key={it.label}
          href={it.href}
          target={it.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={it.label}
          title={it.label}
          className={`${it.bg} text-cream h-12 w-12 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(43,33,28,0.25)]`}
        >
          {it.icon}
        </a>
      ))}
    </div>
  );
}
