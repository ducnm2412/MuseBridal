import { albums } from "@/lib/data";

/** Dải chữ tên concept chạy ngang, lặp hai lần để nối liền. */
export default function Marquee() {
  const items = albums.map((a) => a.title);
  const row = [...items, ...items];
  return (
    <div className="marquee border-y border-line py-4 md:py-5" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="display-italic text-2xl md:text-4xl text-ink/70 px-6 md:px-10">
            {t}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brown ml-6 md:ml-10 align-middle" />
          </span>
        ))}
      </div>
    </div>
  );
}
