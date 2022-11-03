export default class Component extends HTMLElement {
  state;
  handlers;

  constructor(props = {}) {
    super();
    this.state = { ...props };
    this.handlers = {};

    this.setObservers();
    this.setHandlers();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setObservers() {
    // call observe() to subscribe store states
  }

  setHandlers() {
    // apply handlers
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.template();
  }

  template() {}
}
