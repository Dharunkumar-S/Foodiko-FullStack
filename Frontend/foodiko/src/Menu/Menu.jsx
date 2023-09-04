import "./Menu.css";
import Navbar from "../Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";

const Menu = () => {

  const [Items, setItems] = useState([]);

  useEffect(() => {
    ItemsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ItemsList = async () => {
    const result = await axios.get("http://localhost:8080/getAllItems");
    setItems(result.data);
  }

  let i1, i2, i3, i4, i5;
  i1 = i2 = i3 = i4 = i5 = 1;
  const [search1, setSearch1] = useState("");
  const [dish1, setDish1] = useState("");
  const btns = document.querySelectorAll(".butn");

  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      setActiveButn(e);
    });
  });
  function setActiveButn(e) {
    btns.forEach((button) => {
      button.classList.remove("clicked");
    });
    e.target.classList.add("clicked");
  }

  return (
    <>
      <div className="m-body">
        <Navbar />
        <div className="search12">
          <span className="search-icon">
            <SearchIcon sx={{ fontSize: 30 }} />
          </span>
          <input type="text" placeholder="Search" className="search1" onChange={(e) => setSearch1(e.target.value)}></input>
        </div>
        <div className="options1">
          <div className="filter3">
            <button className="butn clicked" onClick={() => setDish1("")}>Veg & Non-Veg</button>
            <button className="butn " onClick={() => setDish1("veg_")}>Veg</button>
            <button className="butn " onClick={() => setDish1("non veg")}>Non-Veg</button>
          </div>
        </div>
        <div className="m-table1">
          <div className="m-table">
            <table>
              <thead>
                <tr>
                  <th colSpan="5">Breakfast</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
                {Items && Items.filter((items) =>
                  items.time.toLowerCase().includes("Breakfast".toLowerCase().trim()) &&
                  items.name.toLowerCase().includes(search1.toLowerCase().trim()) &&
                  items.dish.toLowerCase().includes(dish1.toLowerCase().trim())).map((items) => {
                    return (
                      <tr key={i1}>
                        <td>{i1++}</td>
                        <td><img className="t-img" src={items.imgsrc} alt={items.name} /></td>
                        <td>{items.name}</td>
                        <td>{items.rating}</td>
                        <td>{items.price}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th colSpan="5">Lunch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
                {Items && Items.filter((items) =>
                  items.time.toLowerCase().includes("Lunch".toLowerCase().trim()) &&
                  items.name.toLowerCase().includes(search1.toLowerCase().trim()) &&
                  items.dish.toLowerCase().includes(dish1.toLowerCase().trim())).map((items) => {
                    return (
                      <tr key={i2}>
                        <td>{i2++}</td>
                        <td><img className="t-img" src={items.imgsrc} alt={items.name} /></td>
                        <td>{items.name}</td>
                        <td>{items.rating}</td>
                        <td>{items.price}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th colSpan="5">Dinner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
                {Items && Items.filter((items) =>
                  items.time.toLowerCase().includes("Dinner".toLowerCase().trim()) &&
                  items.name.toLowerCase().includes(search1.toLowerCase().trim()) &&
                  items.dish.toLowerCase().includes(dish1.toLowerCase().trim())).map((items) => {
                    return (
                      <tr key={i3}>
                        <td>{i3++}</td>
                        <td><img className="t-img" src={items.imgsrc} alt={items.name} /></td>
                        <td>{items.name}</td>
                        <td>{items.rating}</td>
                        <td>{items.price}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th colSpan="5">Snacks & Drinks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
                {Items && Items.filter((items) =>
                  items.time.toLowerCase().includes("Snacks & Drinks".toLowerCase().trim()) &&
                  items.name.toLowerCase().includes(search1.toLowerCase().trim()) &&
                  items.dish.toLowerCase().includes(dish1.toLowerCase().trim())).map((items) => {
                    return (
                      <tr key={i4}>
                        <td>{i4++}</td>
                        <td><img className="t-img" src={items.imgsrc} alt={items.name} /></td>
                        <td>{items.name}</td>
                        <td>{items.rating}</td>
                        <td>{items.price}</td>
                      </tr>
                    );
                  })}
              </tbody>

              <thead>
                <tr>
                  <th colSpan="5">Icecream</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S.No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
                {Items && Items.filter((items) =>
                  items.time.toLowerCase().includes("Ice cream".toLowerCase().trim()) &&
                  items.name.toLowerCase().includes(search1.toLowerCase().trim()) &&
                  items.dish.toLowerCase().includes(dish1.toLowerCase().trim())).map((items) => {
                    return (
                      <tr key={i5}>
                        <td>{i5++}</td>
                        <td><img className="t-img" src={items.imgsrc} alt={items.name} /></td>
                        <td>{items.name}</td>
                        <td>{items.rating}</td>
                        <td>{items.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;