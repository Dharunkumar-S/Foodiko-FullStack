import "./Singleitem.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { Cart } from "../Context";
import { useContext } from "react";

const Singleitem = ({ items }) => {

  const { cart, setCart } = useContext(Cart);

  return (
    <div className="item">
      <div className="img-cont">
        <img src={items.imgsrc} alt={items.name} loading="lazy"></img>
      </div>
      <div className="i-namerating">
        <div className="i-name">
          {items.name}
        </div>
        <div className="i-rating">
          <div>{items.rating}</div>
          <div>
            <StarRateRoundedIcon sx={{ color: "white", fontSize: 16, marginTop: "1px" }} />
          </div>
        </div>
      </div>
      <div className="i-time">
        <span></span>
      </div>
      <hr></hr>
      <div className="i-pricecart">
        <div className="i-price">
          <span>₹</span>
          {items.price}
        </div>
        <div className="i-cart" title="Add/Remove">
          {
            cart.includes(items) ? (
              <DeleteIcon className="i-cart1 i-cartdel" sx={{ fontSize: 30 }} onClick={() => { setCart(cart.filter((c) => c.id !== items.id)); }} />
            ) : (
              <AddBoxRoundedIcon className="i-cart1" sx={{ fontSize: 30 }} onClick={() => { setCart([...cart, items]); }} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Singleitem;
