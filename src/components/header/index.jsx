import { Flex } from "@chakra-ui/react";
import assetImg from "../../assets/asset-logo.png";
import "./index.scss";

export default function Header() {
  return (
    <div className="con-header">
      <Flex className="header">
        <img src={assetImg} />
        <Flex className="navbar-menu">
          <p>Beranda</p>
          <p>Produk</p>
          <p>Harga</p>
          <p className="kontak">Kontak</p>
        </Flex>
      </Flex>
    </div>
  );
}
