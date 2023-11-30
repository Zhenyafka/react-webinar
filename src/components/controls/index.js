import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({basketIsOpen}) {
  return (
    <div className='Controls'>
      <button onClick={basketIsOpen}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  basketIsOpen: () => {}
}

export default React.memo(Controls);
