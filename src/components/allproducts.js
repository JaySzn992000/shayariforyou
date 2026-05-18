import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductListmodule.css";

const Allproducts = () => {

const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [bookOpened, setBookOpened] = useState(false);
const [isFlipping, setIsFlipping] = useState(false);

useEffect(() => {

axios
.get("http://localhost:3001/fetchProductslist")
.then((res) => {
setProducts(res.data);
})
.catch((err) => {
console.log(err);
});

}, []);

const nextPage = () => {
if (!isFlipping && currentPage < products.length - 2) {
setIsFlipping(true);
setCurrentPage(prev => prev + 2);
setTimeout(() => setIsFlipping(false), 600);
}
};

const prevPage = () => {
if (!isFlipping && currentPage > 0) {
setIsFlipping(true);
setCurrentPage(prev => prev - 2);
setTimeout(() => setIsFlipping(false), 600);
}
};

useEffect(() => {

if (
currentPage >= products.length - 2 &&
products.length > 0 &&
bookOpened
) {

setTimeout(() => {

setBookOpened(false);
setCurrentPage(0);

}, 1500);

}

}, [currentPage, products, bookOpened]);

const slugify = (text) => {
return text
.toLowerCase()
.replace(/[^a-z0-9]+/g, '-')
.replace(/(^-|-$)/g, '');
};

const openBook = () => {
setBookOpened(true);
setCurrentPage(0);
};

return (

<div className="flipbook_wrapper">

<div className={`book ${bookOpened ? "opened_book" : ""}`}>

{/* ================= LEFT SONG PAGE (ALWAYS VISIBLE WHEN OPEN) ================= */}

<div className={`left_song_page ${bookOpened ? "show_left_page" : ""}`}>

<div className={`song_wrapper ${bookOpened ? "show_song_content" : ""}`}>

<h1>Favourite Songs 🎵</h1>

<a
href="https://open.spotify.com/"
target="_blank"
rel="noreferrer"
>
Perfect - Ed Sheeran
</a>

<a
href="https://open.spotify.com/"
target="_blank"
rel="noreferrer"
>
Until I Found You - Stephen Sanchez
</a>

<a
href="https://open.spotify.com/"
target="_blank"
rel="noreferrer"
>
Tum Se Hi - Mohit Chauhan
</a>

</div>

</div>

{/* ================= FRONT COVER ================= */}

<div
className={`front_book_cover ${bookOpened ? "open_cover" : ""}`}
onClick={openBook} >

<div className="cover_text">

<h1>For You</h1>

<p>Click To Open</p>

</div>

</div>

{/* ================= BOOK CENTER ================= */}

<div className="book_center"></div>

{/* ================= PRODUCT PAGES (PAIRED PAGES) ================= */}

{products.map((product, index) => {
// Calculate which spread this page belongs to
const pageSpread = Math.floor(index / 2);
const isEvenIndex = index % 2 === 0;
const isLeftPage = isEvenIndex;
const isFlipped = pageSpread < currentPage / 2;
const shouldShow = bookOpened && index < products.length;

if (!shouldShow) return null;

return (
<div
className={`page ${isFlipped ? "flipped" : ""}`}
key={product.id}
style={{
zIndex: products.length - index,
transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
transition: 'transform 0.6s ease-in-out'
}}
>

{/* LEFT SIDE OF THE PAGE (FRONT) */}
<div className="page_side page_front">
<div className="page_content">
<div className="product_card">
<Link
to={`/products/${slugify(product.name)}/${product.id}`}
>
<img
src={product.file_path}
alt={product.name}
/>
</Link>
<div className="product_info">
<p>{product.description}</p>
</div>
</div>
<div className="page_number">
{index + 1}
</div>
</div>
</div>

{/* RIGHT SIDE OF THE PAGE (BACK) - SHOWS NEXT PRODUCT */}
<div className="page_side page_back">
<div className="page_content">
{products[index + 1] && (
<div className="product_card">
<Link
to={`/products/${slugify(products[index + 1].name)}/${products[index + 1].id}`}
>
<img
src={products[index + 1].file_path}
alt={products[index + 1].name}
/>
</Link>
<div className="product_info">
<p>{products[index + 1].description}</p>
</div>
</div>
)}
<div className="page_number">
{index + 2}
</div>
</div>
</div>

</div>
);
})}

{/* ================= BUTTONS ================= */}

{bookOpened && products.length > 0 && currentPage < products.length && (

<>
<button
className="flip_prev"
onClick={prevPage}
disabled={isFlipping || currentPage === 0}
style={{ opacity: currentPage === 0 ? 0.5 : 1 }}
>
❮
</button>

<button
className="flip_next"
onClick={nextPage}
disabled={isFlipping || currentPage >= products.length - 2}
style={{ opacity: currentPage >= products.length - 2 ? 0.5 : 1 }}
>
❯
</button>

</>

)}

</div>

</div>

);

};

export default Allproducts;