import Component from "./core/Component.mjs";
import useState from "./hooks/useState.mjs";

export default class App extends Component {
  constructor() {
    super();

    const [state, setState] = useState("initial state");

    this.state = state;
    this.setState = (e) => setState(e.target.value); // event handler for input
  }

  template() {
    return `
      <h1>react-hooks</h1>
      <div>
        🔎 state <span id="target" style="font-weight: bold;"></span>
        <br />
        🪄 setState() <input id="setState" />
      </div>`;
  }

  componentDidMount() {
    this.state.state;
    this.querySelector("#setState").addEventListener("change", this.setState); // !
  }
}
