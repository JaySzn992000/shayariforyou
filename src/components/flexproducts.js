import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import "./FilterProducts.css";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import Allproducts from "./allproducts";
import Lotusfetch from "../Products/lotusfetch";
import O3plusfetch from "../Products/o3plusfetch";
import Biotiquefetch from "../Products/biotiquefetch";
import Lorealparisfetch from "../Products/lorealparisfetch";
import Aromafetch from "../Products/aromafetch";
import Streaxfetch from "../Products/streaxfetch";
import Bathbodyfetch from "./bathbodyfetch";
import Skincarefetch from "./skincarefetch";
import HairCarefetch from "./hair-carefetch";
import Makeupfetch from "./makeupfetch";
import Perfumefetch from "./perfumefetch";
import Banner from "../Slider/Banner1.jpg"
import Facewashfetch from "../Products/facewashfetch";
import Facecreamfetch from "../Products/facecreamfetch";
import Hairserumfetch from "../Products/hairserumfetch";
import Haircolorfetch from "../Products/haircolorfetch";
import Sunscreenfetch from "../Products/sunscreenfetch";
import Shampoofetch from "../Products/shampoofetch";

const Flexproducts = ({ type }) => {

const [allProducts, setAllProducts] = useState([]);

const [filter, setFilter] = useState({  
search: "",
price: 1000,
});

// ✅ filter update handler

const handleFilterUpdate = (newFilter) => {
setFilter((prev) => ({
...prev,
...newFilter,
}));
};

return (

<div>

{/* ✅ NORMAL PRODUCTS */}

{type === "products" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Allproducts 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* Lotus */}

{type === "lotus" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Lotusfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div> 

)}

{/* o3plus */}

{type === "o3plus" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<O3plusfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* lorealparis */}

{type === "lorealparis" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Lorealparisfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* biotique */}

{type === "biotique" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Biotiquefetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}


{/* aroma */}

{type === "aroma" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Aromafetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* streax */}

{type === "streax" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Streaxfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* bathbody */}

{type === "bathbody" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Bathbodyfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* skincare */}

{type === "skincare" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Skincarefetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* haircare */}

{type === "haircare" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<HairCarefetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* makeup */}

{type === "makeup" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Makeupfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* perfume */}

{type === "perfume" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Perfumefetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* facewash */}

{type === "facewash" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Facewashfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* facecream */}

{type === "facecream" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Facecreamfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* hairserum */}

{type === "hairserum" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Hairserumfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* haircolor */}

{type === "haircolor" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Haircolorfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

{/* sunscreen */}

{type === "sunscreen" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} 
/>
</section>

<div className="products_wrapper">
<Sunscreenfetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}


{/* shampoo */}

{type === "shampoo" && (

<div>

<img className="ListBanner" src={Banner}></img>

<div className="main_layout">

<section className="filter_absolute">
<Filters 
allProducts={allProducts} 
onFilterUpdate={handleFilterUpdate} />
</section>

<div className="products_wrapper">
<Shampoofetch 
filter={filter} 
allProducts={allProducts}/>
</div>
</div>

</div>

)}

</div>

);

};

export default Flexproducts;