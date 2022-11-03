import Component from './core/Component.mjs';

export default class App extends Component {
  template() {
    return `
      <h1>react-hooks</h1>

      <state-div></state-div>
      <hi-button></hi-button>
      <bye-button></bye-buton>
    `;
  }
}
