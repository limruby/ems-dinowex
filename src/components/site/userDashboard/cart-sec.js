import { useState } from "react";

function Cart() {
    const [cart, setCart] = useState([])
    const [medalQuantity, setMedal] = useState(0)
    const [bookQuantity, setBook] = useState(0)
    const [product] = useState([
        {
            id: 1,
            name:'Medal',
            price:'RM50',
        },
        {
            id:2,
            name:'Bookchapter',
            price:'RM70',
        },
    ])
    const addToCart = (product) => {
        console.log("added" + JSON.stringify(cart))
        setCart([...cart, {...product}])
    }
    const removeCart = (e) =>{
        console.log("removed"+JSON.stringify(cart))
//         var array = [...this.state.cart]; // make a separate copy of the array
//   var index = array.indexOf(e.target.value)
//   if (index !== -1) {
//     array.splice(index, 1);
//     this.setState({cart: array});
setCart(
    cart.filter((product) => product !== e)
)
  }
  function count (arr, id){
 
  }

    function totalPrice(){
        var medalPrice = 50;
        var bookPrice = 70;
        var medalTotalprice = medalQuantity*medalPrice
        var bookTotalprice = bookQuantity*bookPrice
        var total_price = medalTotalprice + bookTotalprice
       
    }
    const handleForm = (e) => {
        e.preventDefault();
        var postData = {
            _id: localStorage.getItem('user_id'),
           
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
                                 {product[0].name}
                             </div>
                         </td>
                         <button class="btn btn-primary" onClick={()=>addToCart(product[0])}>+</button>
                         <p>{JSON.stringify(cart) }</p>
                         <button class="btn btn-danger"onClick={()=>setMedal(medalQuantity - 1)}>-</button>
                         <td>
                        
                         </td>
                         <td>{product[0].price}</td>
                     </tr>  
                     <tr>
                         <td>
                             <div className="cart-info">
                             {product[1].name}
                             </div>
                         </td>
                         <button class="btn btn-primary" onClick={()=>addToCart(product[1])}>+</button>
                         <p></p>
                         <button class="btn btn-danger" onClick={()=>setBook(bookQuantity - 1)}>-</button>
                         <td>
                        
                         </td>
                         <td>{product[1].price}</td>
                     </tr> 
                    
                                   
                </tbody>
                </table>
        </div>
    )

}
export default Cart;