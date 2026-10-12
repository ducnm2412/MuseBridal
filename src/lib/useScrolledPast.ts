"use client";

import { useEffect, useState } from "react";

/**
 * Trả về true khi trang đã cuộn qua `offset` px.
 * Dùng IntersectionObserver trên một mốc vô hình thay vì lắng nghe sự kiện scroll.
 */
export function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const mark = document.createElement("div");
    mark.setAttribute("aria-hidden", "true");
    mark.style.cssText = `position:absolute;top:${offset}px;left:0;width:1px;height:1px;pointer-events:none;`;
    document.body.prepend(mark);

    const io = new IntersectionObserver(([entry]) => {
      setPast(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    io.observe(mark);
    return () => {
      io.disconnect();
      mark.remove();
    };
  }, [offset]);

  return past;
}
