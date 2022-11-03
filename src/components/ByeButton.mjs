import Component from '../core/Component.mjs';
import store from '../core/flux/index.mjs';
import ACTION from '../core/flux/constants/action.mjs';

const { dispatch } = store;

export default class ByeButton extends Component {
  setHandlers() {
    this.addEventListener('click', () => dispatch(ACTION.BYE));
  }

  template() {
    return `<button>👋</button>`;
  }
}
