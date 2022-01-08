global.diy = {
  components: {
    // checkout: {
    //   create(node, props) {
    //     ReactDOM.render(<Checkout {...props} />, node);
    //   },
    // },
  },
  loadComponent(name) {
    document.querySelectorAll(`diy-component[name='${name}']`).forEach((el) => {
      if (!el.getAttribute('loaded')) {
        const props = {
          // name: 'checkout',
          // productid: '12345',
        };
        Array.from(el.attributes).forEach((attr) => {
          props[attr.name] = attr.value;
        });
        this.components[name].create(el, props);
        console.log(
          '\nthis.components:\t',
          this.components,
          ' \tprops:\t',
          props
        );
        el.setAttribute('loaded', true);
      }
    });
  },
  registerComponent(name, info) {
    this.components[name] = info;
    this.loadComponent(name);
  },
};

// global.diy = {
//   registerComponent(name, info) {
//     createNode(name);
//     info.create(document.querySelector(`#${name}Slot`));
//   },
// };

// const createNode = (name) => {
//   let newDiv = document.createElement('div');
//   newDiv.id = name + 'Slot';
//   let root = document.querySelector('#root');
//   root.appendChild(newDiv);
// };
