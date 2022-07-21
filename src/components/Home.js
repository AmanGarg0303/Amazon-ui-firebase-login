import React from "react";
import banner from "../images/bannerImage.jpg";
import "./Home.css";
import Product from "./Product";
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.png";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import product6 from "../images/product6.jpg";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="banner" />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="Harry Potter and The Chamber Of Secrets by J.K. Rowling"
          price={99}
          rating={5}
          image={product1}
        />
        <Product
          id="2"
          title='iphone 11 Pro Max 6.5" (64GB) 5G 4000mAH ios13 Yellow'
          price={68999}
          rating={5}
          image={product2}
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="French Connection Rose Gold Strap Stainless Steel Smartwatch - F1-D"
          price={2499}
          rating={5}
          image={product3}
        />
        <Product
          id="4"
          title="Amazon - Echo (4th Gen) Smart Speaker with clock and Alexa - Twilight Blue"
          price={3999}
          rating={4}
          image={product4}
        />
        <Product
          id="5"
          title="Asus X507MA-BR059T Laptop (Pentium Quad Core/4 GB/1 TB/Windows 10)"
          price={27999}
          rating={3}
          image={product5}
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="3d curved monitor Ultra HD 85inch with stand"
          price={22999}
          rating={4}
          image={product6}
        />
      </div>
    </div>
  );
}

export default Home;
