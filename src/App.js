import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registeration from "./RegisterationsLogin/Registeration";
import Login from "./Login/Login";
import Profile from "./RegisterationsLogin/Profile";
import EditProfile from "./EditProfile";
import Adminlogin from "./Adminlogin";
import Home from "./components/Home";
import AdminProfile from "./AdminProfile";
import { useState } from "react";
import ForgetPass from "./Login/forgetPass";
import AdminForget from "./AdminForget";
import AdminRegisteration from "./AdminRegisteration";
import AdminUpdate from "./AdminUpdate";
import Allproducts from "./components/allproducts";
import Productmanagment from "./Productmanagment";


function App () {

const [isLoggedIn, setIsLoggedIn] = useState(false);

return (

<div className="App">

<Provider store={store}>

<Router>
<Routes>
<Route path="/Login" element={<Login />} />
<Route path="/allproducts" element={<Allproducts />} />
<Route path="/Productmanagment" element={<Productmanagment />} />
<Route path="/Registeration" element={<Registeration />} />
<Route path="/Adminlogin" element={<Adminlogin setIsLoggedIn={setIsLoggedIn} />} />
<Route path="/Profile" element={<Profile />} />
<Route path="/EditProfile" element={<EditProfile />} />
<Route path="/Adminlogin" element={<Adminlogin />} />
<Route path="/AdminForget" element={<AdminForget />} />
<Route path="/" element={<Home />} />
<Route path="/ForgetPass" element={<ForgetPass />} />
<Route path="/AdminRegisteration" element={<AdminRegisteration />} />
<Route path="/AdminUpdate" element={<AdminUpdate />} />
<Route path="/AdminProfile" element={<AdminProfile />} />

</Routes>

</Router>

</Provider>

</div>

);

}

export default App;
