/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.state.usedCodes = this.state.list.map(item => item.code);
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    let newCode = this.state.usedCodes.length + 1;
    while (this.state.usedCodes.includes(newCode)) {
      newCode++;
    }
    this.setState({
      ...this.state,
      list: [...this.state.list, { code: newCode, title: 'Новая запись' }]
    });
    this.state.usedCodes.push(newCode);
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          if (!item.selected) {
            item.selectedCount = item.selectedCount ? item.selectedCount + 1 : 1;
          }
          item.selected = !item.selected;
        } else {
          item.selected = false;
        }
        return item;
      })
    })
  }

}

export default Store;
