import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./DashboardSlider.css";

function DashboardSlider({ sidebarOpen }) {

const navigate = useNavigate();
const Productshandler = () => {
sessionStorage.setItem("uiClick", "true");
navigate("/DBProducts");
};

const naviDashi = useNavigate();
const navigateSlider = () => {
naviDashi("/DashboardcomXKPbcadafcddcfadacbPKXproductlistsearchdashboard");
};

const naviOrdersCust = useNavigate();
const orderNavi = () => {
naviOrdersCust("/Custorders");
};

const naviManagmentProduct = useNavigate();

const pdmanagmenthandler = () => {
naviManagmentProduct("/Productmanagment");
};

const naviAdmin = useNavigate()
const adminNavi = () => {
naviAdmin('/AdminUsers')
}

const NaviUsers = useNavigate()
const userNavi = () => {
NaviUsers('/UsersDetails')
}

const adminProfileNavi = useNavigate()
const adminProfile = () => {
adminProfileNavi('/AdminProfile')
}


return (

<div>

<div
className={`slider_Dash ${sidebarOpen ? "slider-in" : "slider-out"}`} >

<img
className="Img_DashLogo"
alt=""
loading="lazy"
src="https://cdn-icons-png.flaticon.com/128/1828/1828673.png"
></img>

<div>
<li onClick={adminProfile}>APPS</li>
</div>

<section>
<div>
<img src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"></img>
<li onClick={navigateSlider}>Dashboard</li>
<i className="fa fa-angle-down"></i>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/1007/1007988.png"></img>
<li onClick={Productshandler}>Products</li>
<i className="fa fa-angle-down"></i>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/10485/10485973.png"></img>
<li className="prodctMngmt" onClick={pdmanagmenthandler}>Manage Products</li>
<i className="fa fa-angle-down"></i>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/1008/1008010.png"></img>
<li onClick={orderNavi}>Orders</li>
<i className="fa fa-angle-down"></i>
</div>

<div style={{lineHeight : '2.1em'}}>
<li onClick={adminProfile}>Profile & Data</li>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/15491/15491621.png"></img>
<li onClick={adminProfile}>Profile</li>
<i className="fa fa-angle-down"></i>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/9542/9542653.png"></img>
<li onClick={adminNavi}>Admin Data</li>
<i className="fa fa-angle-down"></i>
</div>

<div>
<img src="https://cdn-icons-png.flaticon.com/128/4548/4548410.png"></img>
<li onClick={userNavi}>User Data</li>
<i className="fa fa-angle-down"></i>
</div>

</section>

<section></section>

</div>
</div>

);

}

export default DashboardSlider;
