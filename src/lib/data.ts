/**
 * Dữ liệu nội dung của website Muse Bridal.
 * LƯU Ý: Giá, ưu đãi và điều kiện áp dụng lấy từ nội dung quảng cáo khách cung cấp,
 * cần khách xác nhận chính thức trước khi đưa lên môi trường thật.
 */

export const site = {
  name: "Muse Bridal",
  tagline: "Studio ảnh cưới tại Sài Gòn",
  phone: "089 926 69 77",
  phoneHref: "tel:0899266977",
  zalo: "https://zalo.me/0899266977",
  facebook: "https://www.facebook.com/musebridalsaigon",
  messenger: "https://m.me/musebridalsaigon",
  instagram: "https://www.instagram.com/musebridalsaigon",
  mapsLink: "https://maps.app.goo.gl/MizrwTo5fFDjJJct9",
  // Thay bằng mã nhúng chính thức từ Google Maps "Chia sẻ > Nhúng bản đồ"
  mapsEmbed: "https://www.google.com/maps?q=Muse%20Bridal%20Saigon&output=embed",
  address: "Thành phố Hồ Chí Minh",
  hours: "Mở cửa hằng ngày, 9:00 đến 20:00",
  email: "musebridalsaigon@gmail.com",
};

export type Photo = { src: string; w: number; h: number; alt: string };

export type Album = {
  slug: string;
  title: string;
  kind: "Phim trường" | "Ngoại cảnh";
  place: string;
  summary: string;
  story: string;
  cover: Photo;
  photos: Photo[];
};

const p = (name: string, w: number, h: number, alt: string): Photo => ({
  src: `/portfolio/${name}.jpg`,
  w,
  h,
  alt,
});

export const albums: Album[] = [
  {
    slug: "serene-love",
    title: "Serene Love",
    kind: "Ngoại cảnh",
    place: "Vườn cây xanh, Sài Gòn",
    summary: "Voan dài trải trên cỏ, hoa đỏ giữa nền xanh thẫm.",
    story:
      "Một buổi chiều nhiều mây ở công viên lớn phía đông thành phố. Cô dâu chọn váy cúp ngực đuôi dài, chú rể veston đen cổ điển. Ekip dựng bãi hoa đỏ thủ công ngay trên bãi cỏ để màu xanh và đỏ đối thoại với nhau.",
    cover: p("serene-love-2", 1365, 2048, "Cô dâu nhắm mắt tựa vào chú rể, voan phủ nhẹ"),
    photos: [
      p("serene-love-2", 1365, 2048, "Cô dâu nhắm mắt tựa vào chú rể, voan phủ nhẹ"),
      p("serene-love-1", 1365, 2048, "Cô dâu ngồi giữa bãi hoa đỏ, chú rể đứng phía sau"),
      p("serene-love-3", 1365, 2048, "Toàn cảnh cặp đôi giữa vườn cây"),
      p("serene-love-4", 1365, 2048, "Bộ ba khung hình Serene Love"),
    ],
  },
  {
    slug: "garden-toast",
    title: "Tiệc vườn",
    kind: "Ngoại cảnh",
    place: "Sân vườn biệt thự",
    summary: "Tháp ly champagne, veston trắng và hàng rào xanh.",
    story:
      "Concept lấy cảm hứng từ một tiệc cưới ngoài trời thu nhỏ. Tháp ly, bàn trắng và nắng xiên giúp cặp đôi tự nhiên nâng ly, cười và quên máy ảnh.",
    cover: p("garden-toast-1", 1365, 2048, "Cặp đôi nâng ly bên tháp champagne"),
    photos: [
      p("garden-toast-1", 1365, 2048, "Cặp đôi nâng ly bên tháp champagne"),
      p("garden-toast-2", 1365, 2048, "Cặp đôi đứng cạnh bàn tiệc trắng"),
    ],
  },
  {
    slug: "calla",
    title: "Calla",
    kind: "Phim trường",
    place: "Phim trường Muse",
    summary: "Nền trắng, hoa rum trắng, ánh sáng mềm.",
    story:
      "Studio tối giản chỉ với một bó hoa rum. Chúng tôi dùng ánh sáng tản lớn để làn da và chất liệu voan hiện rõ, không cần bối cảnh.",
    cover: p("calla-1", 1365, 2048, "Cô dâu cầm hoa rum trắng bên chú rể"),
    photos: [
      p("calla-1", 1365, 2048, "Cô dâu cầm hoa rum trắng bên chú rể"),
      p("calla-2", 1365, 2048, "Cô dâu cười giữa những cánh tay nâng ly"),
      p("calla-3", 1365, 2048, "Cặp đôi đứng với hoa rum và rèm trắng"),
      p("calla-4", 1365, 2048, "Những ly rượu chạm nhau trước cô dâu"),
    ],
  },
  {
    slug: "our-journey",
    title: "Our Journey",
    kind: "Ngoại cảnh",
    place: "Rừng thông, Sài Gòn",
    summary: "Voan trắng giữa tán thông, hoa cầm tay trắng ngà.",
    story:
      "Chụp sáng sớm khi sương chưa tan. Tông trắng của váy và voan nổi hẳn trên nền thông xanh đậm, cô dâu chỉ cần quay đầu nhìn lại.",
    cover: p("our-journey-1", 1365, 2048, "Cô dâu quay lại nhìn, chú rể quay lưng"),
    photos: [
      p("our-journey-1", 1365, 2048, "Cô dâu quay lại nhìn, chú rể quay lưng"),
      p("our-journey-2", 2048, 2048, "Chú rể ôm cô dâu từ phía sau giữa rừng thông"),
      p("our-journey-3", 1200, 1500, "Trang album Our Journey"),
    ],
  },
  {
    slug: "blooming-love",
    title: "Blooming Love",
    kind: "Phim trường",
    place: "Phim trường Muse",
    summary: "Hoa cúc đỏ, voan mỏng và những khoảng trắng.",
    story:
      "Bối cảnh dựng thủ công với hoa tươi màu đỏ đậm. Chúng tôi giữ nhiều khoảng trắng để tấm ảnh thở, như một trang tạp chí.",
    cover: p("blooming-love-1", 1366, 2048, "Cặp đôi bên bãi hoa đỏ trong studio"),
    photos: [
      p("blooming-love-1", 1366, 2048, "Cặp đôi bên bãi hoa đỏ trong studio"),
      p("blooming-love-3", 1366, 2048, "Cặp đôi sau lớp voan mỏng"),
      p("blooming-love-2", 1366, 2048, "Trang album Blooming Love"),
    ],
  },
  {
    slug: "giai-duyen",
    title: "Giai Duyên",
    kind: "Phim trường",
    place: "Phim trường Muse",
    summary: "Áo dài cưới, bình phong gỗ và sắc đỏ truyền thống.",
    story:
      "Concept dành cho lễ gia tiên và các cặp đôi yêu nét Việt. Áo dài trắng và đỏ, phụ kiện ngọc trai, bối cảnh gỗ tối và hoa sen.",
    cover: p("giai-duyen-2", 2048, 2045, "Cô dâu áo dài trắng trên nền đỏ"),
    photos: [
      p("giai-duyen-2", 2048, 2045, "Cô dâu áo dài trắng trên nền đỏ"),
      p("giai-duyen-3", 2043, 2048, "Cô dâu áo dài trắng, phông hồng nhạt"),
      p("giai-duyen-4", 2048, 2048, "Trang album Giai Duyên"),
    ],
  },
  {
    slug: "power-of-love",
    title: "Power of Love",
    kind: "Ngoại cảnh",
    place: "Trung tâm Sài Gòn",
    summary: "Phố, kiến trúc cũ và tháp Bitexco phía xa.",
    story:
      "Đi bộ qua quận 1 với một chiếc váy ngắn và bộ vest xám. Đường phố buổi chiều, ánh đèn cửa hàng và một thành phố làm nền.",
    cover: p("power-of-love-1", 1365, 2048, "Cặp đôi đi giữa phố, tháp Bitexco phía xa"),
    photos: [
      p("power-of-love-1", 1365, 2048, "Cặp đôi đi giữa phố, tháp Bitexco phía xa"),
      p("power-of-love-5", 2000, 2000, "Cặp đôi trước toà nhà cổ, cầm tạp chí"),
      p("power-of-love-3", 1638, 2048, "Trang album Power of Love"),
      p("power-of-love-2", 1638, 2048, "Cô dâu và chú rể trong hẻm phố"),
      p("power-of-love-4", 1638, 2048, "Trang album Power of Love, nền tối"),
    ],
  },
];

export const getAlbum = (slug: string) => albums.find((a) => a.slug === slug);

export type Package = {
  slug: string;
  name: string;
  kind: "Phim trường" | "Ngoại cảnh Sài Gòn";
  price: number;
  originalPrice?: number;
  seats: number;
  lead: string;
  image: Photo;
  outfits: string[];
  crew: string[];
  deliverables: string[];
  extras: string[];
};

export const packages: Package[] = [
  {
    slug: "muse-basic",
    name: "Muse Basic",
    kind: "Phim trường",
    price: 5_590_000,
    originalPrice: 8_590_000,
    seats: 30,
    lead: "Gói chụp studio độc quyền tại phim trường Muse, trọn bộ từ trang phục đến album.",
    image: p("studio-film-1", 2048, 2048, "Cặp đôi trong phim trường với hoa đỏ"),
    outfits: [
      "2 váy cưới thiết kế độc quyền",
      "2 veston cao cấp",
      "Miễn phí phụ kiện và hoa lụa cầm tay",
      "Makeup và làm tóc linh hoạt theo từng concept",
    ],
    crew: ["Photographer", "Makeup Artist", "Stylist"],
    deliverables: [
      "1 album cao cấp 20 trang",
      "1 ảnh cổng ép gỗ cao cấp",
      "5 ảnh lụa để bàn",
      "1 slide trình chiếu tiệc cưới",
    ],
    extras: ["Tự do chọn concept phim trường đang có tại Muse"],
  },
  {
    slug: "sai-gon-basic",
    name: "Sài Gòn Basic",
    kind: "Ngoại cảnh Sài Gòn",
    price: 8_900_000,
    seats: 30,
    lead: "Gói chụp ngoại cảnh, tự do chọn địa điểm trong thành phố, ekip đi cùng cả buổi.",
    image: p("power-of-love-1", 1365, 2048, "Cặp đôi đi giữa phố, tháp Bitexco phía xa"),
    outfits: [
      "Váy cưới thiết kế độc quyền",
      "Veston cao cấp",
      "Phụ kiện và hoa cầm tay theo concept",
      "Makeup và làm tóc theo concept",
    ],
    crew: ["Photographer", "Makeup Artist", "Stylist"],
    deliverables: [
      "1 album cao cấp 20 trang",
      "1 ảnh cổng ép gỗ cao cấp",
      "5 ảnh lụa để bàn",
      "1 slide trình chiếu tiệc nhà hàng",
    ],
    extras: ["Tự do chọn địa điểm tại Sài Gòn", "Tặng phí xe di chuyển một buổi chụp"],
  },
];

export const services = [
  {
    title: "Chụp ảnh cưới phim trường",
    text: "Nhiều concept dựng sẵn tại phim trường Muse, từ tối giản đến truyền thống. Ánh sáng chủ động, không phụ thuộc thời tiết.",
    image: p("calla-3", 1365, 2048, "Cặp đôi trong studio với hoa rum"),
    href: "/dich-vu#phim-truong",
  },
  {
    title: "Chụp ảnh cưới ngoại cảnh Sài Gòn",
    text: "Công viên, phố cổ, biệt thự và những góc thành phố quen thuộc nhìn theo cách khác.",
    image: p("serene-love-3", 1365, 2048, "Toàn cảnh cặp đôi giữa vườn cây"),
    href: "/dich-vu#ngoai-canh",
  },
  {
    title: "Váy cưới thiết kế và veston",
    text: "Bộ sưu tập váy thiết kế độc quyền và veston cao cấp, được chọn cùng stylist cho đúng concept và vóc dáng.",
    image: p("calla-1", 1365, 2048, "Váy cưới cúp ngực và veston đen"),
    href: "/dich-vu#trang-phuc",
  },
  {
    title: "Makeup, làm tóc và styling",
    text: "Makeup Artist và Stylist đi cùng suốt buổi chụp, chỉnh lại sau mỗi lần thay trang phục.",
    image: p("blooming-love-3", 1366, 2048, "Cô dâu sau lớp voan mỏng, trang điểm nhẹ"),
    href: "/dich-vu#makeup",
  },
  {
    title: "Album, ảnh cổng, ảnh lụa và slide tiệc",
    text: "Mọi gói đều bàn giao album in cao cấp, ảnh cổng ép gỗ, ảnh lụa để bàn và slide trình chiếu cho ngày tiệc.",
    image: p("our-journey-3", 1200, 1500, "Trang album in"),
    href: "/dich-vu#san-pham",
  },
];

export const steps = [
  {
    title: "Nhắn tin hoặc để lại số",
    text: "Kể cho Muse nghe ngày cưới dự kiến và phong cách hai bạn thích. Muse gọi lại trong ngày.",
  },
  {
    title: "Chọn gói và concept",
    text: "Muse gợi ý concept phim trường hoặc ngoại cảnh phù hợp, chốt lịch và trang phục thử.",
  },
  {
    title: "Thử váy, chốt makeup",
    text: "Hai bạn đến studio thử váy, veston và trao đổi kiểu makeup với Stylist trước ngày chụp.",
  },
  {
    title: "Ngày chụp",
    text: "Ekip Photographer, Makeup Artist và Stylist đi cùng từ sáng đến khi xong buổi chụp.",
  },
  {
    title: "Nhận ảnh và album",
    text: "Ảnh chỉnh gửi online để chọn, album và ảnh cổng bàn giao trước ngày tiệc.",
  },
];

export const formatPrice = (n: number) =>
  n.toLocaleString("vi-VN") + "đ";

/** Ảnh lẻ dùng cho khối khoảnh khắc và lưới Instagram ở trang chủ. */
export const moments: Photo[] = [
  p("calla-2", 1365, 2048, "Cô dâu cười giữa những cánh tay nâng ly"),
  p("garden-toast-1", 1365, 2048, "Cặp đôi nâng ly bên tháp champagne"),
  p("blooming-love-3", 1366, 2048, "Cặp đôi sau lớp voan mỏng"),
  p("garden-toast-2", 1365, 2048, "Cặp đôi đứng cạnh bàn tiệc trắng"),
  p("giai-duyen-2", 2048, 2045, "Cô dâu áo dài trắng trên nền đỏ"),
  p("our-journey-1", 1365, 2048, "Cô dâu quay lại nhìn giữa rừng thông"),
  p("serene-love-1", 1365, 2048, "Cô dâu ngồi giữa bãi hoa đỏ"),
  p("calla-4", 1365, 2048, "Những ly rượu chạm nhau trước cô dâu"),
  p("calla-3", 1365, 2048, "Cặp đôi đứng với hoa rum và rèm trắng"),
  p("studio-film-1", 2048, 2048, "Cặp đôi trong phim trường với hoa đỏ"),
];

export const testimonials = [
  {
    names: "Thảo và Khôi",
    album: "Serene Love",
    quote:
      "Tụi mình không biết tạo dáng, ekip chỉ từng chút một nên ảnh ra rất tự nhiên.",
    photo: p("serene-love-3", 1365, 2048, "Thảo và Khôi giữa vườn cây"),
  },
  {
    names: "My và Đạt",
    album: "Giai Duyên",
    quote:
      "Chọn concept áo dài để chụp cho lễ gia tiên. Stylist phối phụ kiện rất tinh tế, ba mẹ hai bên đều khen.",
    photo: p("giai-duyen-2", 2048, 2045, "My mặc áo dài trắng trên nền đỏ"),
  },
  {
    names: "Linh và Huy",
    album: "Power of Love",
    quote:
      "Đi bộ quanh quận 1 cả buổi chiều mà không mệt vì ekip lo hết. Ảnh phố Sài Gòn nhìn lạ hẳn so với tụi mình nghĩ.",
    photo: p("power-of-love-1", 1365, 2048, "Linh và Huy đi giữa phố, tháp Bitexco phía xa"),
  },
];
