import { React, useState } from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  const Type = props.type;
  const [hoverState, sethoverState] = useState(false);
  const MouseLeaving = () => {
    setTimeout(() => {
      sethoverState(false);
    }, 2000);
  };
  return (
    <>
      <div className="hoverDiv  hover">
        <div
          class="card-deck container-fluid"
          onClick={() => sethoverState(true)}
          onMouseOut={() => MouseLeaving()}
        >
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

        <div
          className="HoverwaliDiv"
          style={hoverState ? { display: "block" } : { display: "none" }}
        >
          <div class="carddeckbuttonDiv">
            <button
              onMouseOver={() => sethoverState(true)}
              class="carddeckbutton btn btn-light"
            >
              <Link to="/products" state={{ name: Type }}>
                Shop Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
