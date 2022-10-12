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
