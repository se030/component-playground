import Component from './core/Component.mjs';

import StateDiv from './components/StateDiv.mjs';
import HiButton from './components/HiButton.mjs';
import ByeButton from './components/ByeButton.mjs';

customElements.define('state-div', StateDiv);
customElements.define('hi-button', HiButton);
customElements.define('bye-button', ByeButton);

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
