import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 py-24 md:py-40">
      <h1 className="display text-5xl md:text-7xl">Trang này không tồn tại</h1>
      <p className="mt-4 max-w-md text-ink-soft leading-7">
        Đường dẫn có thể đã đổi. Xem album hoặc quay về trang chủ.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/album" className="btn btn-primary">
          Xem album
        </Link>
        <Link href="/" className="btn btn-outline">
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
