import Component from '../core/Component.mjs';
import store from '../core/flux/index.mjs';
import { observe } from '../core/flux/observable.mjs';

const { getState } = store;

export default class HiButton extends Component {
  registerObservers() {
    const observer = () => {
      this.setState({ message: getState().message });
    };
    this.observers = [observer];
  }

  template() {
    return `
        🔎 getState().message
        <span style="font-weight: bold;">${this.state.message}</span>
        <br/>`;
  }
}
