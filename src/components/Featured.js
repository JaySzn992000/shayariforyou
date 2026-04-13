import o3plussunscreen from "../Slider/o3plusessunscreen.png"
import o3plushandmask from "../Slider/o3plushandmask.png"
import o3pluspedicure from "../Slider/o3pluspedicure.png"
import o3plushydrogelmask from "../Slider/o3plushydrogelmask.png"
import "./Featured.css";
import { useNavigate } from "react-router";

const Featured = () => {

const navi = useNavigate()

const naviCollections = () => {
navi('/collections')
}


return (

<div>

<div className="featured_center">

<h2>FEATURED IN</h2>

<section className="shopcategory_flex">
<div className="shopcategory_card">
<img src={o3plussunscreen}></img>
<label>Muted Pastels</label>
<button onClick={naviCollections} ><span>DISCOVER</span></button>
</div>

<div className="shopcategory_card">
<img src={o3plushandmask}></img>
<label>Diva Dreams Mascara</label>
<button onClick={naviCollections} ><span>DISCOVER</span></button>
</div>

<div className="shopcategory_card">
<img src={o3pluspedicure}></img>
<label>Foundation</label>
<button onClick={naviCollections} ><span>DISCOVER</span></button>
</div>

<div className="shopcategory_card">
<img src={o3plushydrogelmask}></img>
<label>Compact Powder</label>
<button onClick={naviCollections} ><span>DISCOVER</span></button>
</div>

</section>

</div>

</div>

)

} 

export default Featured;