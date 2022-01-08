global.diy.registerComponent('images', {
  create(node, props) {
    props.store.images.subscribe({
      next: (val) => {
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
