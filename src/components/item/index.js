import React, {useState} from "react";
import PropTypes from "prop-types";
import './style.css';

function Item(props) {
  const callbacks = {
    onAddOrOnDeleteItem: (e) => {
      e.stopPropagation();
      props.onItemAction(props.item.code, props.item.title, props.item.price);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">
        <p>{props.item.price} ₽</p>
      </div>
      {props.activeModal ? (
        <div className="Item-count">
          <h2 className="Item-count2">{props.item.count} шт.</h2>
        </div>
      ) : (
        ""
      )}
      <div className="Item-actions">
        <button onClick={callbacks.onAddOrOnDeleteItem}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onAddCart: PropTypes.func,
};

Item.defaultProps = {
  onAddItem: () => {},
};

export default React.memo(Item);