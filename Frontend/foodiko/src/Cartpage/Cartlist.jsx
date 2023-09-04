import { useContext } from "react";
import { Cart } from "../Context";
import "./Cartlist.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Cartlist = ({ items, cartindex }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <div className="clist-cont">
      <div className="clist-img">
        <img src={items.imgsrc} alt={items.name} loading="lazy"></img>
      </div>
      <div className="clist-body">
        <div className="clist-name">{items.name}</div>
        <div className="clist-price">
          <span>₹</span>
          {items.price}
        </div>
        <div className="clist-count">

          <button className="c-minus" onClick={() => {
            if (Number(items.quantity) > 1) {
              const _cart = cart.map((items, index) => {
                return cartindex === index ? { ...items, quantity: Number(items.quantity) - 1 } : items
              })
              setCart(_cart)
            }
          }}
          >-</button>
          <p>{items.quantity}</p>
          <button className="c-plus" onClick={() => {
            const _cart = cart.map((items, index) => {
              return cartindex === index ? { ...items, quantity: Number(items.quantity) + 1 } : items
            })
            setCart(_cart)
          }}>+</button>

        </div>
      </div>
      <div className="clist-body1">
        <div title="Remove">
          <DeleteIcon className="i-cart1" sx={{ fontSize: 30 }} onClick={() => { setCart(cart.filter((c) => c.id !== items.id)); }} />
        </div>
        <div className="clist-tprice">
          <span>₹</span>{items.price * items.quantity}
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
