global.diy = {
  registerComponent(name, info) {
    createNode(name);
    info.create(document.querySelector(`#${name}Slot`));
  },
};

const createNode = (name) => {
  let newDiv = document.createElement('div');
  newDiv.id = name + 'Slot';
  let root = document.querySelector('#root');
  root.appendChild(newDiv);
};
