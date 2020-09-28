import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="homeLogo"
        />

        <div className="home__row">
          {/* 2 Products */}
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs 
            Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="45678347"
            title="Cusimax CMKM-150 - Mezclador de masa de 5 cuartos de galón de 800 W, mezclador eléctrico con cabezal inclinable con cuenco de acero inoxidable, 
            gancho para masa, batidor y batidor, color negro"
            price={30.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61KT0DrSWJL._AC_SL1100_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          {/* 3 Products */}
          <Product
            id="12321341"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />

          <Product
            id="12321341"
            title="'Samsung CJ890 Series 49' 3840x1080 Super Ultra-Wide Desktop Monitor for Business,144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs 
            Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          {/* 1 Product */}
          <Product
            id="12321341"
            title="'Samsung CJ890 Series 49' 3840x1080 Super Ultra-Wide 
          Monitor for Business,144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
            price={129.99}
            image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
