import ImgGerobak from "../assets/img-gerobak.jpg";
import ImgBranding from "../assets/img-branding.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faCartShopping,
  faCheckCircle,
  faCoins,
  faGem,
  faSackDollar,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const dataSection2 = [
  {
    description: "Mulai Usaha Tanpa Modal Besar – Sewa Gerobak Sekarang!",
    image: ImgGerobak,
    button: "Sewa Gerobak",
    teksKlik: "Klik sekarang gerobak sudah siap dikirim",
  },
  {
    description: "Paket Branding: Stiker, Banner, Logo Langsung Jadi!",
    image: ImgBranding,
    button: "Layanan Lainnya",
    teksKlik: "Klik di Sini, Branding Langsung Jadi!",
  },
];

export const dataSection3 = [
  {
    description: "Paket Starter Kit",
    logo: (
      <FontAwesomeIcon
        icon={faCoins}
        style={{ fontSize: "70px", color: "#ed7322" }}
        className="logo-icon"
      />
    ),
    series: "Gerobak + Alat Sederhana",
    checkList: [
      "Durasi Sewa: Harian / Mingguan / Bulanan",
      "Ukuran Gerobak: Starter Series (1,5 m × 0,8 m × 1,8 m)",
      "Cup Sealer/Kompor Portable/Peralatan masak dasar",
      "Termasuk pengiriman standar",
    ],
    logoCheckList: (
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ed7322" }} />
    ),
  },
  {
    description: "Paket Cuma Gerobak",
    logo: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ fontSize: "70px", color: "#ed7322" }}
        className="logo-icon"
      />
    ),
    series: "",
    checkList: [
      "Durasi Sewa: Harian / Mingguan / Bulanan",
      "Ukuran Gerobak: Starter (1,5 m × 0,8 m × 1,8 m), Pro (2,0 m × 1,0 m × 2,0 m), Executive (2,5 m × 1,2 m × 2,2 m)",
      "Termasuk pengiriman standar ",
    ],
    logoCheckList: (
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ed7322" }} />
    ),
  },
  {
    description: "Paket Pro Kit",
    logo: (
      <FontAwesomeIcon
        icon={faSackDollar}
        style={{ fontSize: "70px", color: "#ed7322" }}
        className="logo-icon"
      />
    ),
    series: "Gerobak + Alat & Perlengkapan",
    checkList: [
      "Durasi Sewa: Bulanan",
      "Ukuran Gerobak: Pro Series \n (2,0 m × 1,0 m × 2,0 m)",
      "Cup Sealer/Kompor Portable/Peralatan masak dasar",
      "Cup Plastik/Box Makanan/Plastic Bag",
      "Spanduk & menu board standar",
      "Termasuk pengiriman standar",
    ],
    logoCheckList: (
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ed7322" }} />
    ),
  },
  {
    description: "Paket Branding Premium",
    logo: (
      <FontAwesomeIcon
        icon={faGem}
        style={{ fontSize: "70px", color: "#ed7322" }}
        className="logo-icon"
      />
    ),
    series: "Gerobak + Full Custom Branding",
    checkList: [
      "Durasi Sewa: Bulanan",
      "Ukuran Gerobak: Executive Series (2,5 m × 1,2 m × 2,2 m)",
      "Cup Sealer/Kompor Portable/Peralatan masak dasar",
      "Cup Plastik/Box Makanan/Plastic Bag",
      "Spanduk & menu board standar",
      "Branding Kit",
      "Termasuk pengiriman standar",
    ],
    logoCheckList: (
      <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#ed7322" }} />
    ),
  },
];

export const dataSection4 = [
  {
    imgLogo: (
      <FontAwesomeIcon
        icon={faCartShopping}
        style={{ fontSize: "60px", color: "#ed7322" }}
      />
    ),
    title: "Pilihan Gerobak Lengkap & Fleksibel",
    description:
      "Dari gerobak kecil hingga ukuran besar, semua tersedia. Bisa disewa harian, mingguan, atau bulanan sesuai kebutuhan usahamu.",
  },
  {
    imgLogo: (
      <FontAwesomeIcon
        icon={faBrush}
        style={{ fontSize: "60px", color: "#ed7322" }}
      />
    ),
    title: "Custom Branding & Modifikasi",
    description:
      "Gerobak bisa dimodifikasi sesuai identitas brand, lengkap dengan desain estetik, rak, lampu, dan kebutuhan usaha lainnya.",
  },
  {
    imgLogo: (
      <FontAwesomeIcon
        icon={faTruckFast}
        style={{ fontSize: "60px", color: "#ed7322" }}
      />
    ),
    title: "Pengiriman Cepat & Siap Pakai",
    description:
      "Kami siap kirim ke berbagai wilayah, bahkan ke lokasi padat dan terpencil. Gerobak datang dalam kondisi siap langsung digunakan.",
  },
];
