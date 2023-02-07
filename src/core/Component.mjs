import { observe, unobserve } from './flux/observable.mjs';

export default class Component extends HTMLElement {
  state;
  handlers;

  constructor() {
    super();

    this.state = {};
    this.observers = [];
    this.registerObservers();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  setHandlers() {
    // apply handlers
  }

  registerObservers() {
    // initialize this.observers
  }

  setObservers() {
    // observe or unobserve store states
    this.observers.forEach((handler) => (this.isConnected ? observe(handler) : unobserve(handler)));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = this.template();
  }

  template() {}

  connectedCallback() {
    this.setHandlers();
    this.setObservers();
    this.render();
  }

  static get observedAttributes() {
    // state-attributes array
    return [];
  }

  attributeChangedCallback(_, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  disconnectedCallback() {
    this.setObservers();
  }
}
