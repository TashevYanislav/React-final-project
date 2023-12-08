import "./cart.css";
import * as cartItemService from "../../services/cartItemService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContext";

export default function Cart() {
  const { userId } = useContext(AuthContext);

  const [cardItem, setCardItem] = useState([]);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    cartItemService.getAll(userId).then((res) => setCardItem(res));
  }, [userId]);

  const calculateTotal = () => {
    return cardItem.reduce((total, item) => total + Number(item.price), 0);
  };

  const handleRemoveItem = (itemId, name) => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${name} ?`);
    if (hasConfirmed) {
      cartItemService.remove(itemId).then(() => {
        setCardItem((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      });
    }
  };

  const handleCheckout = () => {
    setIsOrderPlaced(true);
  };

  return (
    <div className={`pad`}>
      <h2>Shopping Cart</h2>
      {cardItem.map(({ name, imageUrl, price, _id }) => (
        <div className={`cart-item`} key={_id}>
          <img src={imageUrl} alt={name} className="item-image" />
          <div className="item-details">
            <p className="item-name">{name}</p>
            <p className="item-price">${price}</p>
          </div>
          <button className="cart-item-btn" onClick={() => handleRemoveItem(_id, name)}>Remove</button>
        </div>
      ))}
      {cardItem.length === 0 && (
        <div className="col-12 text-center">
          <h2 className="mb-5">
           No  items  added  to  the<span> Card </span>  yet .
          </h2>
        </div>
      )}
      <div>Total: ${calculateTotal()}</div>
      {isOrderPlaced && <p>Order Placed!</p>}
      <button className="cart-item-btn" onClick={handleCheckout}>Checkout</button>
    </div>
  );
}
