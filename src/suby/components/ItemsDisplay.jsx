import React, { useState } from 'react';
import { itemData } from '../data';

const ItemsDisplay = () => {
  const [displayItem] = useState(itemData);

  return (
    <div className="itemSection">
      {displayItem.map((item, index) => {
        return (
          <div className="gallery" key={index}>
            <img src={item.item_img} alt={`item-${index}`} />
            <div className="itemDetails">
              <p className="itemPrice">₹{item.price}</p>
              <div className="buttonGroup">
                <button className="addToCartBtn">Add to Cart</button>
                <button className="buyBtn">Buy</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsDisplay;
