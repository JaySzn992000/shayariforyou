import React from "react";
import videoone from "../Slider/video1.mp4";
import videotwo from "../Slider/video2.mp4";
import videothree from "../Slider/video3.mp4";
import videofour from "../Slider/video4.mp4";
import videofive from "../Slider/video5.mp4";
import videosix from "../Slider/video6.mp4";
import videoseven from "../Slider/video7.mp4";
import "./videoslider.css";

const BestArrivals = () => {

const arrivals = [
{ id: 1, title: "", video: videoone },
{ id: 2, title: "", video: videotwo },
{ id: 3, title: "", video: videothree },
{ id: 4, title: "", video: videofour },
{ id: 5, title: "", video: videofive },
{ id: 6, title: "", video: videosix },
{ id: 7, title: "", video: videoseven },
];

return (

<div className="arrivals_container">

<h2>Best Arrivals On Trend</h2>

<section className="arrivals_flex">
{arrivals.map((item) => (
<div key={item.id} className="arrival_card">
<video
muted
loop
playsInline
autoPlay
preload="auto"
controls={false}
className="arrival_video"
>
<source src={item.video} type="video/mp4" />
</video>
<p className="arrival_title">{item.title}</p>
</div>
))}
</section>

</div>

);

};

export default BestArrivals;
