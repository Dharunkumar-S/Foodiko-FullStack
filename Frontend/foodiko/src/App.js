import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cartpage/Cartpage";
import Menu from "./Menu/Menu";
import Login from "./User/Login";
import Signup from "./User/Signup";
import Forgotpwd from "./User/Forgotpwd";
import Invoice from "./Invoice/Invoice";
import Profile from "./User/Profile";
import Admin from "./Admin/Admin";
import Viewuser from "./Admin/Viewuser";
import Edituser from "./Admin/Edituser";
import Adduser from "./Admin/Adduser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/invoice" element={<Invoice />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/forgotpassword" element={<Forgotpwd />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/adduser" element={<Adduser />}></Route>
      <Route path="/viewuser/:id" element={<Viewuser />}></Route>
      <Route path="/edituser/:id" element={<Edituser />}></Route>
    </Routes>
  );
}

export default App;
