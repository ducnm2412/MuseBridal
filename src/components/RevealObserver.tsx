"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Theo dõi mọi phần tử có data-reveal, thêm class is-visible khi chúng vào khung nhìn.
 * Phần tử có data-reveal-stagger sẽ cho các con hiện lần lượt.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]"));
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Bật khi vào khung nhìn, tắt khi ra khỏi phía dưới để cuộn lại vẫn thấy hiệu ứng
          if (e.isIntersecting) e.target.classList.add("is-visible");
          else if (e.boundingClientRect.top > 0) e.target.classList.remove("is-visible");
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
