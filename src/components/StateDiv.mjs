import Component from '../core/Component.mjs';
import store from '../core/flux/index.mjs';
import { observe } from '../core/flux/observable.mjs';

const { getState } = store;

export default class HiButton extends Component {
  setObservers() {
    observe(() => {
      getState().message;
      this.render();
    });
  }

  template() {
    return `
        🔎 getState().message
        <span style="font-weight: bold;">${getState().message}</span>
        <br/>`;
  }
}
