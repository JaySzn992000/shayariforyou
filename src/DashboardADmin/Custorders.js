import React, { useEffect, useState } from "react";
import DashboardNav from "../DashboardNav";
import DashboardSlider from "../DashboardSlider";
import { useNavigate } from "react-router";
import "./Custorders.css"

function Custorders() {

const [customerOrder, setcustomerOrder] = useState([]);
const [totalcustProducts, settotalcustProducts] = useState(0);
const [selectedDate, setSelectedDate] = useState('');
const [allCustomerOrders, setAllCustomerOrders] = useState([]);

useEffect(() => {
const customerFetch = async () => {
try {
const response = await fetch("https://omega-zg6z.onrender.com/fetchCutomerOrder");
const data = await response.json();
setAllCustomerOrders(data.products);
setcustomerOrder(data.products);
settotalcustProducts(data.total);
} catch (error) {
console.error("Error message:", error);
}
};

customerFetch ();

}, [] );

const [sidebarOpen, setSidebarOpen] = useState(true);
const [navContainer, setnavContainer] = useState(false);
const [relative_CustordersCon, setrelative_CustordersCon] = useState(false);

const toggleSidebar = () => {
setSidebarOpen((prevState) => !prevState);
setnavContainer((prevState) => !prevState);
setrelative_CustordersCon((prevState) => !prevState);
};

const navigate = useNavigate();

useEffect(() => {
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
if (!isLoggedIn) {
navigate("/adminlogin");
}
}, [navigate]);

const customerFetch = async () => {
try {
const response = await fetch("https://omega-zg6z.onrender.com/fetchCutomerOrder");
const data = await response.json();
setcustomerOrder(data.products);
settotalcustProducts(data.total);
} catch (error) {
console.error("Error message:", error);
}
};

useEffect(() => {
customerFetch();
}, []);

const handleFilterSubmit = () => {
if (!selectedDate) {
customerFetch();
return;
}

const filteredOrders = allCustomerOrders.filter((order) => {
const orderDate = new Date(order.date);
const filterDate = new Date(selectedDate);
return (
orderDate.getFullYear() === filterDate.getFullYear() &&
orderDate.getMonth() === filterDate.getMonth() &&
orderDate.getDate() === filterDate.getDate()
);
});

setcustomerOrder(filteredOrders);
settotalcustProducts(filteredOrders.length);
};

const formatDate = (isoDate) => {
const date = new Date(isoDate);
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
return `${month}-${day}-${year}`;
};

const updateStatus = async (orderId) => {
try {
const response = await fetch("https://omega-zg6z.onrender.com/updateOrderStatus", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ razorpay_order_id: orderId }),
});

const result = await response.json();

if (result.success) {
setcustomerOrder((prevOrders) =>
prevOrders.map((order) =>
order.razorpay_order_id === orderId
? { ...order, status_order: "Delivered" }
: order
)
);
}
} catch (error) {
console.error("Update error:", error);
}
};

return (

<div>

<DashboardNav
toggleSidebar={toggleSidebar}
sidebarOpen={sidebarOpen}
navContainer={navContainer}/>

<DashboardSlider sidebarOpen={sidebarOpen} />

<div
className={`RelativeDB_product ${
relative_CustordersCon ? "RelativeDB_PRQuery-inside" : ""
}`}>

<div
className={`DB_products_ ${
relative_CustordersCon ? "DB_products_PRQuery-inside" : ""
}`} >

<div className="table-wrapper">

<div className="filter-container">

<label htmlFor="date-filter">Filter By Date</label>
<input
id="date-filter"
type="date"
value={selectedDate}
onChange={(e) => setSelectedDate(e.target.value)}
/>
<button onClick={handleFilterSubmit}>Apply Filter</button>
</div>

<table className="product-table">
<thead>
<tr>
<th>Image</th>
<th>Product</th>
<th>Code</th>
<th>Name</th>
<th>Mobile</th>
<th>Email</th>
<th>Payment Status</th>
<th>Order Date</th>
<th>Gender</th>
<th>Address</th>
<th>Country</th>
<th>Pincode</th>
<th>State</th>
<th>Amount</th>
<th>Quantity</th>
<th>Order Status</th>
<th>Order Button</th>
</tr>
</thead>

<tbody>
{customerOrder.map((CusDB, index) => {
const colors = ['#FFB6C1', '#87CEFA', '#98FB98', '#FFD700', '#FFA07A', '#DDA0DD'];
const bgColor = colors[index % colors.length];

return (

<tr key={index}>

<td className="tdData">
{CusDB.file_path && (
<img
src={`https://omega-zg6z.onrender.com${CusDB.file_path}`}
alt={CusDB.name}
className="product-img"
/>
)}
</td>

<td className="tdData">{CusDB.productname}</td>
<td className="tdData">{CusDB.id}</td>
<td className="tdData">{CusDB.name}</td>
<td className="tdData">{CusDB.mob}</td>
<td className="tdData">{CusDB.email}</td>

<td className="tdData">

<span
style={{
backgroundColor: bgColor,
color: "#000",
borderRadius: "5px",
display: "inline-block",
minWidth: "79px",
textAlign: "center",
padding: "4px 8px"
}}
>
{CusDB.payment_status}
</span>

</td>

<td className="tdData">{formatDate(CusDB.date)}</td>
<td className="tdData">{CusDB.gender}</td>
<td className="tdData">{CusDB.address}</td>
<td className="tdData">{CusDB.country}</td>
<td className="tdData">{CusDB.pincode}</td>
<td className="tdData">{CusDB.state}</td>
<td className="tdData">₹ {CusDB.amount}</td>
<td className="tdData">{CusDB.quantity}</td>
<td className="tdData">{CusDB.status_order}</td>

<td className="tdData">

<button
className="custOrderBtn"
onClick={() => updateStatus(CusDB.razorpay_order_id)}
disabled={CusDB.status_order === "Delivered"} >

{CusDB.status_order === "Delivered" ? "Delivered" : "Mark as Delivered"}
</button>
</td>
</tr>
);
})}
</tbody>
</table>
</div>

</div>
</div>
</div>

);
}

export default Custorders;