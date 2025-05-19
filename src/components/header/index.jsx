import { Flex } from "@chakra-ui/react";
import assetImg from "../../assets/asset-logo.png";
import "./index.scss";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="con-header">
      <Flex className="header">
        <img src={assetImg} alt="Logo" />
        <Flex className="navbar-menu">
          <p onClick={() => scrollToSection("body")}>Beranda</p>
          <p onClick={() => scrollToSection("section-3")}>Produk</p>
          <p onClick={() => scrollToSection("section-5")}>Sewa</p>
          <a
            href="https://wa.me/6289634477394"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p className="kontak" onClick={() => scrollToSection("footer")}>
              Kontak
            </p>
          </a>
        </Flex>
      </Flex>
    </div>
  );
}
