import * as React from 'react';
import ReactDOM from 'react-dom';

const Checkout = ({ store }) => {
  const [product, setProduct] = React.useState(0);
  React.useEffect(() => {
    store.productId.subscribe({
      next: (val) => setProduct(val),
    });
  }, []);
  const changeImage = () => {
    store.images.next(['spacecats.jpg']);
  };
  return (
    <div>
      <div>Checkout</div>
      <div>Product: {product} </div>
      <div>
        <button onClick={changeImage}>Change Image</button>
      </div>
      <div>
        <button onClick={() => {}}>Add to Cart</button>
      </div>
    </div>
  );
};

global.diy.registerComponent('checkout', {
  create(node, props) {
    ReactDOM.render(<Checkout {...props} />, node);
  },
});
