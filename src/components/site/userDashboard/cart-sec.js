import { useState, useEffect } from "react";

function Cart({data, setData}) {
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)
    const [price, setPrice] = useState(0)
 
    useEffect(() => {
        if (medalQuantity > 0 || bookQuantity > 0) {
            var medalPrice = 50;
            var bookPrice = 70;
            var total = 0
            var firstpurchase = 0
            if(data.first_purchase === true && bookQuantity > 0){
                firstpurchase = 30
            }
            total = medalQuantity*medalPrice + bookQuantity*bookPrice + firstpurchase
            setPrice(total)
            console.log("Medal Quantity:" + medalQuantity + "Price" + price)
        } else {
             console.log("Empty")
        }
      }, [bookQuantity, data.first_purchase, medalQuantity, price]);

    function totalPrice() {
        var medalPrice = 50
        var bookPrice = 70
        var total = 0
        var firstpurchase = 0
        if(data.first_purchase === true && bookQuantity > 0){
            firstpurchase = 30
        }
        total = medalQuantity*medalPrice + bookQuantity*bookPrice + firstpurchase
        setPrice(total)
    
        console.log("quantity"+medalQuantity+ "   total"+ total )
    }

    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            account_id: localStorage.getItem('user_id'),
            medalQuantity: medalQuantity,
            bookQuantity: bookQuantity,
            total_price: totalPrice,
            bill_status: 'N/A'
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
                         <button class="btn btn-primary" onClick={()=>setMedal(medalQuantity + 1)}>+</button>
                         <p>{medalQuantity}</p>
                         <button class="btn btn-danger"onClick={()=>setMedal(medalQuantity - 1)}>-</button>
                         <td>
                        
                         </td>
                         <td>RM 50</td>
                         <td>{medalQuantity*50}</td>
                     </tr>  
                     <tr>
                         <td>
                             <div className="cart-info">
                             BookChapter
                             </div>
                         </td>
                         <button class="btn btn-primary" onClick={()=>setBook(bookQuantity + 1)}>+</button>
                         <p>{bookQuantity}</p>
                         <button class="btn btn-danger" onClick={()=>setBook(bookQuantity - 1)}>-</button>
                         <td>
                        
                         </td>
                         <td>RM 100 (First purchase) <br></br>RM 70 (Subsequent purchase)</td>
                         <td>{}</td>
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