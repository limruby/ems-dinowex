import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Book Chapter",
      price: 100,
      quantity: 1
    },
    {
      id: 2,
      name: "Medal",
      price: 50,
      quantity: 1
    },
    
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button className="btn btn-primary" onClick={() => addItem(p)}>{p.name}</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Click item to add to cart</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} x RM{item.price} &mdash;
            <button className="btn btn-primary"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="btn btn-primary"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <h1>Total: RM {cartTotal}</h1>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}

export default App;