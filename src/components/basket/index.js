import React from "react";
import './style.css';
import Item from "../item";
import Controls from "../controls";
import PropTypes from "prop-types";

const Basket = ({
                  basketList,
                  basketIsOpen,
                  deleteItem,
                  totalPrice,
                  activeModal
                }) => {
  return (
    <div className="Basket">
      <div className="Basket-header">
        <h1>Корзина</h1>
        <button onClick={basketIsOpen}>Закрыть</button>
      </div>
      {basketList.map((item) => (
        <div key={item.code} className="Basket-item">
          <Item
            buttonText={'Удалить'}
            item={item}
            onItemAction={deleteItem}
            activeModal={activeModal}
          />
        </div>
      ))}

      {basketList.length > 0 ? (
        <div className="Basket-footer">
          <h3>Итого</h3>
          <h2>{totalPrice} &#8381;</h2>
        </div>
      ) : (
        <div className="Basket-empty">
          <h2>Корзина пуста</h2>
        </div>
      )}
    </div>
  );
};

Basket.propTypes = {
  basketList: PropTypes.arrayOf(PropTypes.shape({
    totalPrice: PropTypes.number,
  })).isRequired,
  deleteItem: PropTypes.func,
  basketIsOpen: PropTypes.func
};

Basket.defaultProps = {
  deleteItem: () => {},
};

export default Basket;
