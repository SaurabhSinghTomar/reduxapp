import React from "react";

function ReduxMain(props) {
  console.log("home", props);
  return (
    <div>
      <div>
        <h1>Home Component</h1>

        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() => {
                props.addToCartHandle({ pice: 1000, name: "i phone 11" });
              }}
            >
              Add To Cart
            </button>
            <button
              onClick={() => {
                props.removeFromCartHandle();
              }}
              className="remove-cart"
            >
              Remove Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReduxMain;
