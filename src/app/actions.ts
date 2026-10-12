"use server";

export type BookingState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "phone" | "date" | "pkg", string>>;
};

const phoneRe = /^(0|\+84)[0-9]{8,10}$/;

export async function submitBooking(
  _prev: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").replace(/[\s.]/g, "");
  const date = String(formData.get("date") ?? "").trim();
  const pkg = String(formData.get("pkg") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  const errors: BookingState["errors"] = {};
  if (name.length < 2) errors.name = "Nhập tên để Muse biết xưng hô.";
  if (!phoneRe.test(phone)) errors.phone = "Số điện thoại chưa đúng, ví dụ 0899266977.";
  if (!pkg) errors.pkg = "Chọn gói chụp hoặc chọn 'Chưa biết, cần tư vấn'.";

  if (Object.keys(errors).length) {
    return { status: "error", errors, message: "Kiểm tra lại các ô được đánh dấu." };
  }

  const payload = { name, phone, date, pkg, note, at: new Date().toISOString() };

  // Khi có BOOKING_WEBHOOK_URL (Google Apps Script, Zapier, n8n...), gửi dữ liệu tới đó.
  const webhook = process.env.BOOKING_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook trả về ${res.status}`);
    } catch (err) {
      console.error("Gửi đăng ký thất bại", err, payload);
      return {
        status: "error",
        message: "Chưa gửi được. Gọi hoặc nhắn Zalo cho Muse để được xếp lịch ngay.",
      };
    }
  } else {
    console.log("Đăng ký tư vấn mới", payload);
  }

  return {
    status: "success",
    message: `Muse đã nhận thông tin của ${name}. Studio sẽ gọi lại số ${phone} trong ngày.`,
  };
}
