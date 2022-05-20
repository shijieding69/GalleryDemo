import React from "react";
import Magnifier from "react-magnifier";
import "../styles/common.css"
function Image(props) {

    return (
      <div>  
        <Magnifier
          className="card"
          src={props.imgPath}
          width={500}
          height={500}
        />
      </div>
    );
}

export default Image;