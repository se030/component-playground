import Component from '../core/Component.mjs';
import store from '../core/flux/index.mjs';
import ACTION from '../core/flux/constants/action.mjs';

const { dispatch } = store;

export default class HiButton extends Component {
  setHandlers() {
    this.addEventListener('click', (e) => dispatch(ACTION.HI));
  }

  template() {
    return `<button>👋</button>`;
  }
}
