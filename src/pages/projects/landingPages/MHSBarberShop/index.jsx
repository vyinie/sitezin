import "./styles.css";
import BackIcon from "../../components/BackIcon";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import mapa from "/src/imgs/projectsItems/landingPages/viking barber/mapa-barbearia.png";
import { useState } from "react";
function MHSBarberShop() {
  const servicos = [
    {
      title: "cabelo",
      items: [
        { name: "infantil", price: "R$ 20" },
        { name: "corte", price: "R$ 25" },
        { name: "escova", price: "R$ 30" },
        { name: "hidratação", price: "R$ 30" },
        { name: "coloração", price: "R$ 40" },
      ],
    },
    {
      title: "barba",
      items: [
        { name: "aparo", price: "R$ 20" },
        { name: "corte", price: "R$ 25" },
        { name: "hidratação", price: "R$ 30" },
        { name: "coloração", price: "R$ 40" },
      ],
    },
  ];

  function showBtn() {
    const el = document.querySelector(".toTop").style;
    el.display = window.scrollY < 300 ? "" : "block";
  }

  document.addEventListener("scroll", showBtn);

  // mostra os links
  const [moreOpt, setMoreOpt] = useState(true);
  const handlerMoreOpt = () => {
    setMoreOpt(!moreOpt);

    for (let i = 1; i <= 3; i++) {
      const line = document.getElementById("BSline" + i);
      line.classList.toggle("on", moreOpt);
    }

    const wrapper = document.querySelector(".BSlinks");
    wrapper.style.width = moreOpt ? "calc(100% - 50px)" : "";
  };
  return (
    <div className="BSbody">
      {/* ==================== header ==================== */}
      <a href="#BShome" className="toTop">
        <div className="BSarrow"></div>
      </a>
      <header className="BSheader">
        <BackIcon
          styles={{
            top: "30px",
            width: "50px",
          }}
        />
        <div className="BSlogo">MHS</div>

        <div className="BSlinksContainer">
          <div className="BSlinks">
            <a className="BSlink" href="#BSmenu">
              menu
            </a>
            <a className="BSlink" href="#BShours">
              horarios
            </a>
            <a className="BSlink" href="#BScontact">
              endereço
            </a>
            <a className="BSlink" href="#BScontact">
              contato
            </a>
          </div>

          <div onClick={handlerMoreOpt} className="BSmoreOpt">
            <div className="BSline" id="BSline1"></div>
            <div className="BSline" id="BSline2"></div>
            <div className="BSline" id="BSline3"></div>
          </div>
        </div>
      </header>

      {/* ==================== home ==================== */}
      <div id="BShome" className="home">
        <div className="homeTitleContainer">
          <h1 className="homeTitle">MHS</h1>
          <h1 className="homeTitle">Barber Shop</h1>
        </div>
        <div className="CTA">Fazer Reserva</div>
      </div>

      {/* ==================== menu ==================== */}

      <div id="BSmenu" className="menu">
        <p className="menuTitle">serviços</p>

        <div className="BScardsContainer">
          {servicos.map((i) => (
            <div key={i.title} className="menuCard">
              <h1 className="BScardTitle">{i.title}</h1>

              <table className="BScardItems">
                <tbody className="BStbody">
                  {i.items.map((t) => (
                    <tr className="BSitem" key={t.name}>
                      <td className="BSitemName">{t.name}</td>
                      <td className="itemDiv">•</td>

                      <td>{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

      {/* ================== horarios ================== */}

      <div id="BShours" className="hours">
        <p>segunda - sexta</p>
        <p>07:00 - 20:00</p>
        <hr className="hoursLine" />
        <p>sábados</p>
        <p>09:00 - 22:00</p>

        <div id="BShourDetail1"></div>
        <div id="BShourDetail2"></div>
      </div>

      {/* ================== localização ================== */}

      <div id="BScontact" className="address">
        <div className="contactInfo">
          <p className="contactTitle">contato</p>
          <div className="contactLinks">
            <WhatsAppIcon sx={{ fontSize: "40px" }} />
            <p>(81) 99999-9999</p>
          </div>

          <div className="contactLinks">
            <InstagramIcon sx={{ fontSize: "40px" }} />
            <p>@MHS_BarberShop</p>
          </div>

          <div className="contactLinks">
            <MailOutlineIcon sx={{ fontSize: "40px" }} />
            <p>mhsbarbershop@gmail.com</p>
          </div>
        </div>

        <div className="map">
          <p className="mapTitle">clique para abir o mapa</p>

          <img src={mapa} className="BSmap" />
        </div>
      </div>
    </div>
  );
}

export default MHSBarberShop;
