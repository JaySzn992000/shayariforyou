import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./ProductListmodule.css";

const Allproducts = () => {

const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(0);
const [bookOpened, setBookOpened] = useState(false);
const [isFlipping, setIsFlipping] = useState(false);
const [currentSong, setCurrentSong] = useState(null);
const audioRef = useRef(null);

const songs = [
{
name: "Unwell | Matchbox Twenty (RNB).Mp3",
file: "song.mp3",
spotifyUrl: "https://open.spotify.com/"
},
{
name: "Sherpaa Roy with no Gwen.Mp3",
file: "songtwo.mp3",
spotifyUrl: "https://open.spotify.com/"
},
{
name: "Unwell | Late Night PH (Cover).Mp3",
file: "songthree.mp3",
spotifyUrl: "https://open.spotify.com/"
}
];

useEffect(() => {
axios
.get("https://shayariforyou.onrender.com/fetchProductslist")
.then((res) => {
setProducts(res.data);
})
.catch((err) => {
console.log(err);
});
}, []);

useEffect(() => {
return () => {
if (audioRef.current) {
audioRef.current.pause();
}
};
}, []);

useEffect(() => {
if (currentSong && audioRef.current) {
audioRef.current.pause();
audioRef.current.src = currentSong.file;
audioRef.current.play().catch(error => {
console.log("Auto-play prevented:", error);
});
}
}, [currentSong]);

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

const openBook = () => {
setBookOpened(true);
setCurrentPage(0);
};

const playSong = (song, e) => {
e.preventDefault();
setCurrentSong(song);
};

return (
<div className="flipbook_wrapper">
<audio ref={audioRef} />

<div className={`book ${bookOpened ? "opened_book" : ""}`}>

{/* Left/Song Page */}

<div className={`left_song_page ${bookOpened ? "show_left_page" : ""}`}>
<div className={`song_wrapper ${bookOpened ? "show_song_content" : ""}`}>
<h1>Favourite Songs 🎵</h1>
{songs.map((song, idx) => (
<div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
<a href={song.spotifyUrl} target="_blank" rel="noreferrer" style={{ flex: 1 }}>
{song.name}
</a>
<button
onClick={(e) => playSong(song, e)}
style={{
padding: '5px 10px',
backgroundColor: currentSong?.name === song.name ? '#4CAF50' : '#007bff',
color: 'white',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
fontSize: '12px'
}}
>
{currentSong?.name === song.name ? 'Playing ▶' : 'Play'}
</button>
</div>
))}
{currentSong && (
<div style={{ marginTop: '15px', fontSize: '14px', color: '#fff' }}>
Now Playing : {currentSong.name}
</div>
)}
</div>
</div>

{/* Front Cover */}

<div className={`front_book_cover ${bookOpened ? "open_cover" : ""}`} onClick={openBook}>
<div className="cover_text">
<h1>A Book Of Shayari</h1>
<p>Click To Open</p>
</div>
</div>

<div className="book_center"></div>

{/* Dynamic Pages */}

{products
.filter((_, index) => index % 2 === 0)
.map((product, mapIndex) => {
const index = mapIndex * 2;
const isFlipped = index < currentPage;
const shouldShow = bookOpened;

// CRITICAL FIX: Flipped aur Non-flipped pages ki alalag z-index layer honi chahiye

const dynamicZIndex = isFlipped 
? index + 1                       // Flipped pages neeche se upar stack hongi (1, 3, 5...)
: products.length - index;        // Non-flipped pages upar se neeche stack hongi

if (!shouldShow) return null;

return (
<div
className={`page ${isFlipped ? "flipped" : ""}`}
key={product.id || index}
style={{
zIndex: dynamicZIndex,
transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)'
}}
>

{/* Front Side of Page (Right side originally, flips to left) */}

<div className="page_side page_front">
<div className="page_content">
<div className="product_card">
<img src={product.file_path} alt={product.name} />
<div className="product_info">
<p>{product.description}</p>
</div>
</div>
<div className="page_number">{index + 1}</div>
</div>
</div>

{/* Back Side of Page (Becomes visible on left after flip) */}

<div className="page_side page_back">
<div className="page_content">
{products[index + 1] && (
<div className="product_card">
<img src={products[index + 1].file_path} alt={products[index + 1].name} />
<div className="product_info">
<p>{products[index + 1].description}</p>
</div>
</div>
)}
<div className="page_number">{index + 2}</div>
</div>
</div>
</div>
);
})}

{/* Navigation Buttons */}

{bookOpened && products.length > 0 && (
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