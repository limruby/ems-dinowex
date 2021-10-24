import { useState, useEffect } from "react";
import axiosInstance from '../../../../src/utils/axiosConfig.js';
import OrderHistory from './order-history-sec.js'

function Cart({ data, setData, user }) {
    const [medalQuantity, setMedal] = useState(0)
    const [certQuantity, setCertQuantity] = useState(0)
    const [medalSubtotal, setMedalSubtotal] = useState(0)
    const [certSubtotal, setCertQuantitySubtotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (medalQuantity > 0 || certQuantity > 0) {
            var medalPrice = 50;
            var certPrice = 10;
            var total = 0
            // var firstpurchase = 0
            // if (data.first_purchase === "true" && certQuantity > 0) {
            //     firstpurchase = 30
            // }
            setMedalSubtotal(medalQuantity * medalPrice)
            setCertQuantitySubtotal(certQuantity * certPrice) //+ firstpurchase)
            total = medalQuantity * medalPrice + certQuantity * certPrice //+ firstpurchase
            setPrice(total)
            // console.log("Medal Quantity:" + medalQuantity + "Total Price" + price)
            // console.log("cert Quantity:" + certQuantity + "Total Price" + price)
        } else {
            setMedal(0)
            setCertQuantity(0)
            setMedalSubtotal(0)
            setCertQuantitySubtotal(0)
            total = 0
            setPrice(total)
        }
    }, [certQuantity, data.first_purchase, medalQuantity, price]);

    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            account_id: user._id,
            medalQuantity: medalQuantity,
            certQuantity: certQuantity,
            total_price: price,
            bill_status: 'N/A',
            email: user.email,
            name: data.name,
            order_date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
        }
        if (price > 0) {
            axiosInstance.post("/api/cart/addToCart", postData)
                .then(function (response) {
                    if (certQuantity > 0 && data.first_purchase === "true") {
                        var status = {
                            _id: data._id,
                            first_purchase: "false"
                        }
                        axiosInstance.post("/api/competitors/update", status)
                            .then(function (response) {
                            }).catch(function (error) {
                                console.log(error);
                            })
                    }
                    alert("Order confirmed, please wait for the billing invoice.")
                    localStorage.setItem("activeKeys", "Cart")
                    window.location.href = '/user_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        } else {
            alert("Your cart is empty!")
        }
    }
    return (
        <div>
            <div className="order-btn">
                <table>
                    <thead>
                        <tr>
                            <th className="table-center-text">Product</th>
                            <th className="table-center-text">Quantity</th>
                            <th className="table-center-text">Price</th>
                            <th className="table-center-text">Total Price</th>
                        </tr>
                    </thead>
                    {/* Start New Row */}
                    <tbody>
                        <tr>
                            <td>
                                <div className="cart-info table-center-text">
                                    Medal
                                </div>
                            </td>
                            <td>
                                <div className="cart-quantity">
                                    <button className="btn btn-primary cart-button" onClick={() => setMedal(medalQuantity + 1)}>+</button>
                                    <p className="cart-selected-quantity">{medalQuantity}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => setMedal(medalQuantity - 1)}>-</button>
                                </div>
                            </td>
                            <td className="table-center-text">RM 50 (each)</td>
                            <td className="table-center-text">RM {medalSubtotal}</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info table-center-text">
                                    Certificate
                                </div>
                            </td>
                            <td>
                                <div className="cart-quantity">
                                    <button className="btn btn-primary cart-button" onClick={() => setCertQuantity(certQuantity + 1)}>+</button>
                                    <p className="cart-selected-quantity">{certQuantity}</p>
                                    <button className="btn btn-danger cart-button" onClick={() => setCertQuantity(certQuantity - 1)}>-</button>
                                </div>
                            </td>
                            <td className="table-center-text">RM 10 (each)</td>
                            <td className="table-center-text">RM {certSubtotal}</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><p className="cart-total">Total :</p></td>
                            <td>
                                <p className="table-center-text">RM {price}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p></p>
                <button class="btn btn-primary order-btn" onClick={handleForm}>Order</button>
            </div>
            <p></p>
            <h2>Order History</h2>
            <OrderHistory></OrderHistory>
        </div>
    )
}
export default Cart;