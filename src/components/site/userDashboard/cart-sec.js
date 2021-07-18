import { useState } from "react";


function Cart() {
    const [product, setProduct] = useState({
        medalQuantity: 0,
        bookQuantity: 0,
        total_price: 0
    })
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)

   const addMedalQuantity = (e) => {
        e.preventDefault()
        setMedal({
           medalQuantity : medalQuantity + 1
        })
      
    }
    const addBookQuantity = (e) => {
       
        setBook({
           bookQuantity : bookQuantity + 1
        })
        totalPrice()
    }
    const minusMedalQuantity = input => e => {
        e.preventDefault()
        setMedal({
            medalQuantity : medalQuantity - 1
         })
        totalPrice()
    }
    const minusBookQuantity = input => e => {
        e.preventDefault()
        setBook({
            bookQuantity : bookQuantity - 1
         })
        totalPrice()
    }
    function totalPrice(){
        var medalPrice = 50;
        var bookPrice = 70;
        var medalTotalprice = product.medalQuantity*medalPrice
        var bookTotalprice = product.bookQuantity*bookPrice
        var total_price = medalTotalprice + bookTotalprice
        setProduct({
            ...product,
            'totalPrice': total_price
        })
    }
    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            _id: localStorage.getItem('user_id'),
            product: product,
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
                        <td>
                        <button onClick={(e)=>{minusMedalQuantity()}}>-</button>
                        <p>{medalQuantity}</p>
                        <button type="button" onClick={addMedalQuantity()}>+</button> 
                        </td>
                        <td>RM 50</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                Bookchapter
                            </div>
                        </td>
                        <button onClick={(e)=>{minusBookQuantity('bookQuantity')}}>-</button>
                        <p>{bookQuantity}</p>
                    <button onClick={(e)=>{addBookQuantity('bookQuantity')}}>+</button>
                        <td>
                        </td>
                        <td>RM 70</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                               Total Price
                            </div>
                        </td>
                        
                        <td>
                        </td>
                        <td>RM {product.total_price}</td>
                    </tr>
                </tbody></table>
        </div>
    )

}
export default Cart;