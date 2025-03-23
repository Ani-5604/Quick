import React, { useState } from 'react';
import { itemData } from '../data';

const ItemsDisplay = () => {
  const [displayItem] = useState(itemData);

  const handleAddToCart = (item) => {
    alert(`Added item to cart! Price: ₹${item.price}`);
  };

  const handleBuy = (item) => {
    alert(`Buying item for ₹${item.price}!`);
  };

  return (
    <div className="itemSection">
      {displayItem.map((item, index) => {
        return (
          <div className="gallery" key={index}>
            <img src={item.item_img} alt={`item-${index}`} />
            <div className="price">₹{item.price}</div>
            <div className="buttonGroup">
              <button className="cartButton" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              <button className="buyButton" onClick={() => handleBuy(item)}>Buy</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsDisplay;
