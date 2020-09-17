import React from 'react'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"></img>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                {/* <h2>Your Subtotal</h2> */}
            </div>
        </div>
    )
}

export default Checkout
