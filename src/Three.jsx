import React from "react";

function Three()
{
    return(
        <>
        
<div id="demo" className="carousel slide" data-ride="carousel">
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="http://drtarungandhi.com/wp-content/uploads/2015/03/15-900x600.jpg" width="40%" height="200"/>
    </div>
    <div className="carousel-item">
      <img src="http://drtarungandhi.com/wp-content/uploads/2015/02/Slider2.000-900x600.jpg" width="40%" height="200"/>
   </div>
    <div className="carousel-item">
      <img src="http://drtarungandhi.com/wp-content/uploads/2015/03/81-900x600.jpg" width="40%" height="200"/>
    </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
        </>
    );

};

export default Three;