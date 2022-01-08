import * as React from 'react';
import ReactDOM from 'react-dom';

const Checkout = (props) => {
  return (
    <div>
      <div>Checkout</div>
      <div>Product: {props.productid} </div>
      <div>
        <button onClick={() => {}}>Change Image</button>
      </div>
      <div>
        <button onClick={() => {}}>Add to Cart</button>
      </div>
      <div></div>
    </div>
  );
};

global.diy.registerComponent('checkout', {
  create(node, props) {
    ReactDOM.render(<Checkout {...props} />, node);
  },
});
