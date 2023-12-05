import React from "react";
import Head from "../head";
import Item from "../item";
import { PropTypes } from "prop-types";
import "./style.css";
import List from "../list";
import { priceFormat } from "../../utils";

const cart = ({ cartList, setModal, cartAction}) => {
  const totalPrice = cartList.reduce(
    (price, item) => price + item.price * item.count,
    0
  );
  return (
    <div className="Cart">
      <Head title="Корзина">
        <button className="Cart-close" onClick={() => setModal(false)}>
          Закрыть
        </button>
      </Head>
      <div className="Cart__list">
        {cartList.length ? (
          <List list={cartList} cartAction={cartAction} isCart={true} />
        ) : (
          <div className="Cart-is-empty">В корзине пусто</div>
        )}
        {totalPrice ? (
          <div className="Cart-footer">
            <div className="Cart-item">Итого:</div>
            <div className="Cart-item">{priceFormat(totalPrice)}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

cart.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  cartAction: PropTypes.func,
  setModal: PropTypes.func,
  isModal: PropTypes.bool,
};

Item.defaultProps = {
  cartAction: () => {},
  setModal: () => {},
  isModal: false,
};

export default React.memo(cart);
