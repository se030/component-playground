export default class Component extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.componentDidMount();
  }

  render() {
    this.innerHTML = this.template();
  }

  template() {}

  componentDidMount() {}
}
