let currentObserver = null;

export const observe = (handler) => {
  currentObserver = handler;

  // storage 사용하면 get trap 실행
  handler();

  currentObserver = null;
};

export const observable = (storage) => {
  const observers = {};

  Object.keys(storage).forEach((state) => (observers[state] = new Set()));

  return new Proxy(storage, {
    get(target, state) {
      if (currentObserver) observers[state].add(currentObserver);

      return target[state];
    },
    set(target, state, value) {
      if (target[state] === value) return true;
      if (JSON.stringify(target[state]) === JSON.stringify(value)) return true;

      target[state] = value;
      observers[state].forEach((handler) => handler());

      return true;
    },
  });
};
