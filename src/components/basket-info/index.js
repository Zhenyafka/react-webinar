import Controls from "../controls";
import PropTypes from "prop-types";
import React from "react";
import './style.css';

const BasketInfo = ({basketIsOpen, totalPrice, itemCount}) => {

  const endWith = (count) => {
    const lastNum = parseInt(count.toString().slice(-1));
    const lastTwoNum = parseInt(count.toString().slice(-1));
    let word;
    if (!(Number.isInteger(count))) return "";
    else if (lastNum === 1 || lastTwoNum === 11) word = 'товар';
    else if (lastNum === 2 || lastNum ===3 || lastNum === 4) word = 'товара';
    else if (lastTwoNum === 11) word = 'товаров';
    else word = 'товаров';
    return `${itemCount} ${word} ${totalPrice}`;}

  return (
    <div className="Basket-info">
      <h4>В корзине:</h4>
      {itemCount !== 0 ? <h3>{`${itemCount} ${endWith(itemCount)} / ${totalPrice}`}</h3>
        : <h3>пусто</h3>}
      <Controls basketIsOpen={basketIsOpen} />
    </div>
  );
};


BasketInfo.propTypes = {
  totalPrice: PropTypes.number,
  itemCount: PropTypes.number,
  basketIsOpen: PropTypes.func
};

BasketInfo.defaultProps = {
  basketIsOpen: () => {
  },
}

export default BasketInfo;