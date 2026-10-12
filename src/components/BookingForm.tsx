"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitBooking, type BookingState } from "@/app/actions";
import { packages, site } from "@/lib/data";

const initial: BookingState = { status: "idle" };

export default function BookingForm() {
  const [state, action, pending] = useActionState(submitBooking, initial);
  const defaultPkg = useSearchParams().get("goi") ?? undefined;

  if (state.status === "success") {
    return (
      <div className="border border-brown/40 bg-blush/40 p-6 md:p-8">
        <p className="display text-3xl md:text-4xl">Đã nhận đăng ký</p>
        <p className="mt-3 leading-7">{state.message}</p>
        <p className="mt-2 leading-7 text-ink-soft">
          Muốn trao đổi ngay? Nhắn Zalo cho Muse, studio đang trực.
        </p>
        <a href={site.zalo} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
          Nhắn Zalo cho Muse
        </a>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={action} noValidate className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-soft">Tên của bạn</span>
          <input
            name="name"
            className="field"
            placeholder="Ví dụ: Lan và Minh"
            autoComplete="name"
            required
            aria-invalid={!!err.name}
          />
          {err.name && <span className="mt-1 block text-sm text-brown">{err.name}</span>}
        </label>
        <label className="block">
          <span className="text-sm text-ink-soft">Số điện thoại hoặc Zalo</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            className="field"
            placeholder="0899 266 977"
            autoComplete="tel"
            required
            aria-invalid={!!err.phone}
          />
          {err.phone && <span className="mt-1 block text-sm text-brown">{err.phone}</span>}
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-ink-soft">Ngày chụp dự kiến</span>
          <input name="date" type="date" className="field" />
        </label>
        <label className="block">
          <span className="text-sm text-ink-soft">Gói chụp quan tâm</span>
          <select
            name="pkg"
            className="field"
            defaultValue={defaultPkg ?? ""}
            required
            aria-invalid={!!err.pkg}
          >
            <option value="" disabled>
              Chọn gói
            </option>
            {packages.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}, {p.kind.toLowerCase()}
              </option>
            ))}
            <option value="Chưa biết, cần tư vấn">Chưa biết, cần tư vấn</option>
          </select>
          {err.pkg && <span className="mt-1 block text-sm text-brown">{err.pkg}</span>}
        </label>
      </div>

      <label className="block">
        <span className="text-sm text-ink-soft">Ghi chú thêm</span>
        <textarea
          name="note"
          rows={3}
          className="field resize-none"
          placeholder="Concept yêu thích, số lượng trang phục, câu hỏi về ưu đãi..."
        />
      </label>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-brown">
          {state.message}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Đang gửi..." : "Gửi đăng ký tư vấn"}
        </button>
        <span className="text-sm text-ink-soft">Muse gọi lại trong ngày, không gọi ngoài giờ.</span>
      </div>
    </form>
  );
}
