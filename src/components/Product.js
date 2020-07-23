import React from 'react';

const Product = ({id, name, price, addFunc }) => {

  return (
    <article id={id}>
      <div className="foodItems">
        <div className="foodDetails">
            <div>
                <h1 id="foodName">{name}</h1>
            </div>
            <div id = "price">Price: {price} ₹</div>
            <div id="button">
            <button id="btn" onClick={() => addFunc({id, name, price, units: 1, total :'' })}
            >ORDER</button>
        </div>
        </div>
        
      </div>
    </article>
  );
};

export default Product;