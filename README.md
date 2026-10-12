# Muse Bridal

Website giới thiệu studio ảnh cưới Muse Bridal (TP.HCM). Next.js 16, React 19, Tailwind CSS 4, TypeScript.

## Chạy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Cấu trúc

- `src/app/` các trang: `/` trang chủ, `/album`, `/album/[slug]`, `/dich-vu`, `/bang-gia`, `/lien-he`
- `src/lib/data.ts` toàn bộ nội dung: album, gói chụp, dịch vụ, thông tin liên hệ. Sửa nội dung ở đây.
- `src/components/` header, footer, nút liên hệ nhanh, form đặt lịch, thẻ album, thẻ gói
- `src/app/actions.ts` server action nhận form đặt lịch
- `public/portfolio/` ảnh portfolio, đặt tên theo concept
- `public/brand/` logo (gốc, nâu, trắng)

## Việc cần khách xác nhận trước khi lên môi trường thật

- Bảng giá, giá gốc, số lượng ưu đãi và điều kiện áp dụng trong `src/lib/data.ts`
- Địa chỉ studio, giờ mở cửa, email (hiện là giá trị tạm)
- Mã nhúng Google Maps chính thức (`site.mapsEmbed`)
- Link Instagram và Messenger (`site.instagram`, `site.messenger`)
- Nơi nhận đăng ký tư vấn: điền `BOOKING_WEBHOOK_URL` trong `.env.local` (xem `.env.example`)
- Ảnh gốc độ phân giải cao thay cho ảnh tải từ mạng xã hội
