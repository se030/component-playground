import App from './App.mjs';
import StateDiv from './components/StateDiv.mjs';
import HiButton from './components/HiButton.mjs';
import ByeButton from './components/ByeButton.mjs';

customElements.define('my-app', App);

customElements.define('state-div', StateDiv);
customElements.define('hi-button', HiButton);
customElements.define('bye-button', ByeButton);
