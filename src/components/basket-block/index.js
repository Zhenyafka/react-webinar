import React from 'react';
import './style.css';


const BasketBlock = ({active, setActive, children}) => {

  const openBasket = () => {
    setActive(false);
  }

  return (
    <div>
      <div className={active ? "block.active" : "block"} onClick={openBasket}>
        <div onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BasketBlock;