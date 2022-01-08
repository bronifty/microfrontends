global.diy.registerComponent('images', {
  create(node, props) {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'spacecats.jpg');
    node.appendChild(newImg);
    props.store.images.subscribe({
      next: (val) => {
        // getting a cors error; not sure how to set it just using parcel...
        node.innerHTML = `Images: ${val.join(', ')}`;
        val.forEach((val) => createNode(val));
      },
    });
  },
});

const createNode = (src) => {
  let newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  let images = document.querySelector(`#images`);
  images.setAttribute('test', 'test');
  images.appendChild(newImg);
};
