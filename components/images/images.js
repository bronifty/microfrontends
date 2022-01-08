global.diy.registerComponent('images', {
  create(node, props) {
    // let newImg = document.createElement('img');
    // newImg.setAttribute('src', 'spacecats.jpg');
    // node.appendChild(newImg);
    props.store.images.subscribe({
      next: (val) => {
        node.innerHTML = `Images: ${val.join(', ')}`;
        val.forEach((val) => createNode(node.getAttribute('id'), val));
      },
    });
  },
});

const createNode = (node, src) => {
  let newImg = document.createElement('img');
  newImg.setAttribute('src', src);
  let images = document.querySelector(`#${node}`);
  images.setAttribute('test', 'test');
  images.appendChild(newImg);
};
