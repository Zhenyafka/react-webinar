import React, {useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Basket from "./components/basket";
import BasketInfo from "./components/basket-info";
import BasketBlock from "./components/basket-block";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  const basketList = store.getState().basketList;
  const totalPrice = store.getState().totalPrice;
  const itemCount = store.getState().countCart;
  const activeModal = store.getState().activeModal;
  const callbacks = {
    onAddItemCart: useCallback(
      (code, title, price) => {
        store.onAddItem(code, title, price);
      },
      [store, store.getState().basketList]
    ),
    onClickOpenBasket: useCallback(() => {
      store.clickOpenBasket();
    }, [store]),
    deleteBasketItem: useCallback(
      (code) => {
        store.onDeleteItem(code);
      },
      [store]
    ),
  };


  return (
    <PageLayout>
      <Head title="Магазин" />
      <BasketInfo
        cartList={basketList}
        basketIsOpen={callbacks.onClickOpenBasket}
        fullPriceCart={totalPrice}
        itemCount={itemCount}
      />
      <List list={list} onAddItem={callbacks.onAddItem} />
      <BasketBlock active={activeModal} setActive={callbacks.onClickOpenBasket}>
        <Basket
          cartList={basketList}
          cartOpen={callbacks.onClickOpenBasket}
          deleteCartItem={callbacks.deleteItem}
          fullPriceCart={totalPrice}
          activeModal={activeModal}
        />
      </BasketBlock>
    </PageLayout>
  );
}

export default App;
