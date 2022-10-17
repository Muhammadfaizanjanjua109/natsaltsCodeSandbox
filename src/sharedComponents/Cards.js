import React from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  return (
    <>
      <div class="card-deck container-fluid">
        {props.data.map((index, item) => {
          return (
            <>
              <div key={item} class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  style={{ height: "220px", objectFit: "contain" }}
                  src={index.src}
                  alt={index.alt}
                />
                <div class="card-body">
                  <h5 class="card-title">{index.tittle}</h5>
                  <p class="card-text">{index.text}</p>
                  <Link to="/">Buy Now</Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
