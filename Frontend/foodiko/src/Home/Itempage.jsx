import { useContext, useEffect, useState } from "react";
import "./Itempage.css";
// import Items from "../Items.json";
import SearchIcon from "@mui/icons-material/Search";
import Singleitem from "./Singleitem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import axios from "axios";

const Itempage = () => {

  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      setActiveBtn(e);
    });
  });
  function setActiveBtn(e) {
    buttons.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }

  const buttons1 = document.querySelectorAll(".btn1");
  buttons1.forEach((button) => {
    button.addEventListener("click", (e) => {
      setActiveBtn1(e);
    });
  });
  function setActiveBtn1(e) {
    buttons1.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }

  const pagebtns = document.querySelectorAll(".h-page");
  pagebtns.forEach((pagebtn) => {
    pagebtn.addEventListener("click", (e) => {
      setActivepagebtn(e);
    });
  });
  function setActivepagebtn(e) {
    pagebtns.forEach((pagebtn) => {
      pagebtn.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }

  const paging = "http://localhost:8080/paging/12/"
  const asc = "http://localhost:8080/pagingAndSorting/price/12/";
  const desc = "http://localhost:8080/pagingAndreverseSorting/price/12/";

  const [Items, setItems] = useState([]);
  const { cart } = useContext(Cart);
  const [search, setSearch] = useState("");
  const [time, setTime] = useState("");
  const [dish, setDish] = useState("");
  const [pageno, setPageno] = useState("0");
  const [url, setUrl] = useState(paging);

  useEffect(() => {
    ItemsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const ItemsList = async () => {
    const link = url + pageno;
    const result = await axios.get(link);
    setItems(result.data);
  };


  function sortfunction(e) {
    var option = e.target.value;
    if (option === "paging") {
      setUrl(paging);
      ItemsList();
    }
    else if (option === "desc") {
      setUrl(desc);
      ItemsList();
    }
    else if (option === "asc") {
      setUrl(asc);
      ItemsList();
    }
  }

  return (
    <>
      <div className="cont1">
        <div className="search1">
          <span className="search-icon">
            <SearchIcon sx={{ fontSize: 30 }} />
          </span>
          <input type="text" placeholder="Search" className="search" onChange={(e) => setSearch(e.target.value)}></input>
        </div>
        <div className="options">
          <div className="filter1">
            <button className="btn clicked" onClick={() => setTime("")}>All</button>
            <button className="btn " onClick={() => setTime("Breakfast")}>Breakfast</button>
            <button className="btn " onClick={() => setTime("Lunch")}>Lunch</button>
            <button className="btn " onClick={() => setTime("Dinner")}>Dinner</button>
            <button className="btn " onClick={() => setTime("Snacks & Drinks")}>Snacks & Drinks</button>
            <button className="btn " onClick={() => setTime("Ice creams")}>Ice creams</button>
          </div>
          <div className="filter2">
            <button className="btn1 clicked" onClick={() => setDish("")}>Veg & Non-Veg</button>
            <button className="btn1 " onClick={() => setDish("veg_")}>Veg</button>
            <button className="btn1 " onClick={() => setDish("non veg")}>Non-Veg</button>
          </div>
          <div className="filter3">
            <select className="btn3 clicked" id="option-sort" onClick={(e) => sortfunction(e)} onChange={(e) => sortfunction(e)}>
              <option value="paging">Sort by</option>
              <option value="desc">Price: High to Low</option>
              <option value="asc">Price: Low to High</option>
            </select>
          </div>
        </div>
        <div className="cont">
          <div className="item-cont">
            {
              Items && Items.filter((items) =>
                items.name.toLowerCase().includes(search.toLowerCase().trim()) &&
                items.time.toLowerCase().includes(time.toLowerCase().trim()) &&
                items.dish.toLowerCase().includes(dish.toLowerCase().trim())
              ).map((items) => <Singleitem items={items} key={items.id} />)
            }
          </div>
        </div>
        <div className="h-pagecont">
          <div className="h-page clicked" onClick={() => { setPageno("0"); ItemsList(); }}>1</div>
          <div className="h-page" onClick={() => { setPageno("1"); ItemsList(); }} >2</div>
          <div className="h-page" onClick={() => { setPageno("2"); ItemsList(); }} >3</div>
          <div className="h-page" onClick={() => { setPageno("3"); ItemsList(); }} >4</div>
          <div className="h-page" onClick={() => { setPageno("4"); ItemsList(); }} >5</div>
        </div>
      </div>
      <div className="h-cparent">
        <div className="livecount">{cart.length}</div>
        <div className="h-cart-count1">
          <div className="h-cart-count">
            <Link to="/cart">
              <ShoppingCartIcon className="h-ccount" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itempage;
