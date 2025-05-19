import { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import assetImg from "../../assets/asset-logo.png";
import "./index.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="con-header">
      <Flex className="header" justify="space-between" align="center">
        <img src={assetImg} className="logo" />

        <Flex className="navbar-menu desktop-nav">
          <p>Beranda</p>
          <p>Produk</p>
          <p>Harga</p>
          <p className="kontak">Kontak</p>
        </Flex>

        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={toggleMenu}
          className="hamburger-icon"
        />
      </Flex>
      {isOpen && (
        <Flex direction="column" className="mobile-nav">
          <p>Beranda</p>
          <p>Produk</p>
          <p>Harga</p>
          <p className="kontak">Kontak</p>
        </Flex>
      )}
    </div>
  );
}
