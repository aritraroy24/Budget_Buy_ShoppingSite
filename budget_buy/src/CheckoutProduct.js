import React from 'react'
import "./CheckoutProduct.css"
import StarsIcon from '@material-ui/icons/Stars';
import { useStateValue } from './StateProvider';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Removing the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p className="star"><StarsIcon /></p>
                        ))}
                </div>
                <div className="itemNumber">
                    <button className="removeFromBasket_Btn" onClick={removeFromBasket}>Remove Item</button>
                    <RemoveCircleOutlineIcon className="btnAddRemove" />
                    <AddCircleOutlineIcon className="btnAddRemove" />
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct