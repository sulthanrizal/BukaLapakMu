import { Flex } from "@chakra-ui/react";
import img from "../../assets/asset.png";
import BackgroundSection5 from "../../assets/bg-section5.png";
import "./index.scss";
import { dataSection2, dataSection4 } from "../../data";
import { useState } from "react";
import Section3 from "./slider/section-3";

export default function Body() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    pesan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // (opsional) bisa console.log(formData);
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      alamat: "",
      pesan: "",
    });
  };

  return (
    <>
      <div className="body">
        <section className="section-1">
          <img src={img} className="img" />
          <Flex className="text-section1">
            <h1>BukaLapakMu</h1>
            <span>
              BukaLapakMu menyediakan solusi praktis untuk pelaku usaha kecil
              dengan menyewakan gerobak modern yang fleksibel, serta layanan
              tambahan seperti branding dan penyewaan peralatan usaha, guna
              mendukung pertumbuhan UMKM di Indonesia.
            </span>
            <span className="text-foot">#UsahaGakPakeDrama</span>
          </Flex>
        </section>
        <section className="section-2">
          {dataSection2.map((item, index) => {
            const { description, image, button, teksKlik } = item;
            return (
              <div key={index} className="card-section2">
                <img src={image} />
                <div className="text-card-section2">
                  <h1>{description}</h1>
                  <span>{teksKlik}</span>
                  <p>{button}</p>
                </div>
              </div>
            );
          })}
        </section>
        <Section3 />
        <section className="section-4">
          <h1>Kenapa Pilih BukaLapakMu?</h1>
          <div className="content-section4">
            {dataSection4.map((item, index) => {
              const { title, description, imgLogo } = item;
              return (
                <div key={index} className="card-section4">
                  {imgLogo}
                  <h2>{item.title}</h2>
                  <span>{item.description}</span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <section className="section-5">
        <div className="bg-img">
          <img src={BackgroundSection5} />
        </div>
        <div className="content-section5">
          <div className="content-form">
            <span>SEWA GEROBAK UNTUK KEBUTUHAN BISNIS ANDA</span>
            <span style={{ fontWeight: "700", fontSize: "40px" }}>
              #UsahaGakPakeDrama
            </span>
          </div>
          <div className="col-form">
            <h1>Isi form berikut untuk cek harga dan konsultasi gratis</h1>
            <form className="col-form-1" onSubmit={handleSubmit}>
              <h2>INFORMASI PERSONAL</h2>
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
              />
              <div className="col-form-2">
                <input
                  type="text"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="No. Telepon"
                  value={formData.telepon}
                  onChange={(e) =>
                    setFormData({ ...formData, telepon: e.target.value })
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Alamat"
                value={formData.alamat}
                onChange={(e) =>
                  setFormData({ ...formData, alamat: e.target.value })
                }
              />
              <div className="col-form-3">
                <h2>KONSULTASIKAN KEBUTUHAN GEROBAK ANDA</h2>
                <input
                  type="text"
                  placeholder="Pesan"
                  value={formData.pesan}
                  onChange={(e) =>
                    setFormData({ ...formData, pesan: e.target.value })
                  }
                />
              </div>
              <button className="btn-form" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
