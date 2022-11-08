const React = (function () {
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] ?? initVal;

    const _idx = idx;
    const setState = (newVal) => (hooks[_idx] = newVal);
    idx++;

    return [state, setState];
  }

  function useEffect(cb, depArray) {
    /*
      to detect depArray changes, need to diff old dep and new dep
      === need to keep our deps somewhere, hooks[]
    */
    const oldDeps = hooks[idx];

    let hasChanged = true;
    if (oldDeps) {
      hasChanged = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]));
    }
    if (hasChanged) cb();

    hooks[idx] = depArray;
    idx++;
  }

  return { render, useState, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [text, setText] = React.useState('init');

  React.useEffect(() => console.log('I am useEffect'), [text]);

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (letter) => setText(text + letter),
  };
}

let App = React.render(Component);
console.log();

App.click();
App = React.render(Component);
console.log();

App.type('s');
App.click();
App = React.render(Component);
console.log();

App.click();
App = React.render(Component);
console.log();

/*

export default function useState(initialValue) {
  let $rerenderTarget;
  console.log(this); // TODO: 훅을 사용하는 컴포넌트에 바인딩해서 리렌더 타겟에 접근 가능하도록

  const stateObject = new Proxy(
    { state: initialValue },
    {
      get(target, _) {
        if (!$rerenderTarget) {
          $rerenderTarget = document.querySelector("#target");
          $rerenderTarget.innerHTML = target.state;
        }

        return target.state;
      },
      set(target, _, value) {
        target.state = value;

        $rerenderTarget.innerHTML = target.state;
        return true;
      },
    }
  );

  const setState = (newState) => (stateObject.state = newState);

  return [stateObject, setState];
}

*/
