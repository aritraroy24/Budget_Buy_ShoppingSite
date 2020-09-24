import React from "react";
import "./Home.css";
import Product from "./Product";
import productList from "./AllProducts"

function Home() {
  function div1() {
    let i = 0;
    return (
      <div className="home_row">
        {productList.slice(0, 3).map(() => (
          <Product
            id={productList[i].id}
            title={productList[i].title}
            price={productList[i].price}
            image={productList[i].image}
            rating={productList[i].rating}
            {...i++}
          />
        ))}
      </div>
    )
  }
  function div2() {
    let i = 3;
    return (
      <div className="home_row">
        {productList.slice(0, 5).map(() => (
          <Product
            id={productList[i].id}
            title={productList[i].title}
            price={productList[i].price}
            image={productList[i].image}
            rating={productList[i].rating}
            {...i++}
          />
        ))}
      </div>
    )
  }
  function div3() {
    let i = 8;
    return (
      <div className="home_row">
        {productList.slice(0, 5).map(() => (
          <Product
            id={productList[i].id}
            title={productList[i].title}
            price={productList[i].price}
            image={productList[i].image}
            rating={productList[i].rating}
            {...i++}
          />
        ))}
      </div>
    )
  }
  function div4() {
    let i = 13;
    return (
      <div className="home_row">
        {productList.slice(0, 6).map(() => (
          <Product
            id={productList[i].id}
            title={productList[i].title}
            price={productList[i].price}
            image={productList[i].image}
            rating={productList[i].rating}
            {...i++}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://img.faballey.com/images/banner/5d150424-6e54-4d0f-ad1c-30f5476c13c0.jpg"
          alt=""
        ></img>
        <div className="home_Container">
          <p className="home_Heading">TRENDINGS</p>
        </div>
        <div className="home_row">
          {div1(productList, Product)}
        </div>
        <div className="home_Container">
          <p className="home_Heading">TOP BRANDS</p>
        </div>
        <div className="home_row">
          {div2(productList, Product)}
        </div>
        <div className="home_row">
          {div3(productList, Product)}
        </div>
        <div className="home_Container">
          <p className="home_Heading">TOP OFFERS</p>
        </div>
        <div className="home_row">
          {div4(productList, Product)}
        </div>
      </div>
    </div>
  );
}

export default Home;
