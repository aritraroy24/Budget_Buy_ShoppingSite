import React from 'react'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    if (user === null) {
        return (
            <div className="checkoutWithOutUser">
                <img className="checkout_ad" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"></img>
                <div className="emptyBasketImgContainer">
                    <h1>Please login to see your basket</h1>
                    <img id="withOutLoginBasketImg" src="https://www.linkpicture.com/q/mPngtreemblue-shopping-cart-gift-box_5353467.png" type="image" />
                </div>
            </div>
        )
    }
    else if (basket.length === 0) {
        return (
            <div className="withoutItemCheckout">
                <div className="checkout">
                    <div className="checkout_left">
                        <img className="checkout_ad" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"></img>
                    </div>
                    <div className="checkout_right">
                        <Subtotal />
                        <h2>Your Subtotal</h2>
                    </div>
                </div>
                <div className="emptyBasketImgContainer">
                    <h1>Hello {user?.email}, Your basket is empty</h1>
                    <img id="emptyBasketImg" src="https://www.linkpicture.com/q/pngfind.com-cart-png-2727925.png" type="image" />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="checkout">
                <div className="checkout_left">
                    <img className="checkout_ad" src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"></img>
                    <div>
                        <h3>Hello, {user?.email}</h3>
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
                    <h2>Your Subtotal</h2>
                </div>
            </div>
        )
    }

}

export default Checkout
