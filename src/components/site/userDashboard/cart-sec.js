import { useState, useEffect } from "react";
import axiosInstance from '../../../../src/utils/axiosConfig.js';

function Cart({ data, setData, user }) {
    localStorage.setItem("activeKeys", "Cart")
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)
    const [medalSubtotal, setMedalSubtotal] = useState(0)
    const [bookSubtotal, setBookSubtotal] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (medalQuantity > 0 || bookQuantity > 0) {
            var medalPrice = 50;
            var bookPrice = 70;
            var total = 0
            var firstpurchase = 0
            if (data.first_purchase === "true" && bookQuantity > 0) {
                firstpurchase = 30
            }
            setMedalSubtotal(medalQuantity * medalPrice)
            setBookSubtotal(bookQuantity * bookPrice + firstpurchase)
            total = medalQuantity * medalPrice + bookQuantity * bookPrice + firstpurchase
            setPrice(total)
            console.log("Medal Quantity:" + medalQuantity + "Total Price" + price)
            console.log("Book Quantity:" + bookQuantity + "Total Price" + price)
        } else {
            console.log("Empty")
        }
    }, [bookQuantity, data.first_purchase, medalQuantity, price]);


    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            account_id: user._id,
            medalQuantity: medalQuantity,
            bookQuantity: bookQuantity,
            total_price: price,
            bill_status: 'N/A',
            email: user.email,
            name: data.name
        }
        if (price > 0) {
            axiosInstance.post("/api/cart/addToCart", postData)
                .then(function (response) {
                    if(bookQuantity > 0 && data.first_purchase === "true"){
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
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {/* Start New Row */}
                <tbody>
                    <tr>
                        <td>
                            <div className="cart-info">
                                Medal
                            </div>
                        </td>
                        <button class="btn btn-primary" onClick={() => setMedal(medalQuantity + 1)}>+</button>
                        <p>{medalQuantity}</p>
                        <button class="btn btn-danger" onClick={() => setMedal(medalQuantity - 1)}>-</button>
                        <td>

                        </td>
                        <td>RM 50</td>
                        <td>RM {medalSubtotal}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                BookChapter
                            </div>
                        </td>
                        <button class="btn btn-primary" onClick={() => setBook(bookQuantity + 1)}>+</button>
                        <p>{bookQuantity}</p>
                        <button class="btn btn-danger" onClick={() => setBook(bookQuantity - 1)}>-</button>
                        <td>

                        </td>
                        <td>RM 100 (First purchase) <br></br>RM 70 (Subsequent purchase)</td>
                        <td>RM {bookSubtotal}</td>
                    </tr>
                    <tr>
                        <td>
                            <p>Total RM: {price}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p> Confirm order: </p><button class="btn btn-primary" onClick={handleForm}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Cart;