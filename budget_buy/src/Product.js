import React from "react";
import "./product.css";
import StarsIcon from '@material-ui/icons/Stars';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  // console.log("This is the basket >>>", basket);
  const addToBasket = () => {
    // Dispatch the item into the Data Layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="star"><StarsIcon /></p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>
      <div className="allButtons">
        <button onClick={addToBasket} className="kartBtn">Add to Bag</button>
        <FavoriteBorderOutlinedIcon className="wishlistBtn" />
      </div>
    </div>
  );
}

export default Product;
