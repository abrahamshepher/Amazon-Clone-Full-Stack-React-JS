import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="495388094"
            title="Kenwood KMix Stand Mixer for Baking Stylish Kitchen Mixer with K-beater, Rough Hook and Whisk, S Litre Glass Bowl"
            price={290.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81rgIlDm6wL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={400}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>

        <div className="home_row">
          <Product
            id="00001234"
            title="HONOR Pad 8 12-inch Wi-Fi Tablet, Blue Hour"
            price={199}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Zy0F5qqmL._AC_SX679_.jpg"
          />

          <Product
            id="12340000"
            title="Microsoft Surface Pro 8 1TB (i7/16GB) Platinum W11 PRO *NEW*"
            price={230}
            rating={5}
            image="https://m.media-amazon.com/images/I/514f8EwqOnL._AC_SX679_.jpg"
          />
          <Product
            id="12344321"
            title="Lenovo Legion T5 Gaming Tower 26L Desktop P"
            price={1400}
            rating={4}
            image="https://m.media-amazon.com/images/I/710VeUTStdL._AC_SX679_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="43211234"
            title="Science In Sport SIS Clear Sports Water Bottle, Plastic Water Bottle"
            price={40}
            rating={5}
            image="https://m.media-amazon.com/images/I/61NCFmxJbiL._AC_SY879_.jpg"
          />
          <Product
            id="00120034"
            title="How To Kill Your Family: THE #1 SUNDAY TIMES BESTSELLER"
            price={23.78}
            rating={4}
            image="https://m.media-amazon.com/images/I/41kW28v8MEL._SX324_BO1,204,203,200_.jpg"
          />
          <Product
            id="12003400"
            title="OXO Softworks Non-Stick 28 cm Frying Pan Skillet, Induction, Dishwasher Safe, Grey"
            price={45}
            rating={5}
            image="https://m.media-amazon.com/images/I/7192V9lUYLL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
