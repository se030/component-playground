let currentObserver = null;
let isObserving = false;

export const observe = (handler) => {
  currentObserver = handler;
  isObserving = true;

  // using storage inside this handler triggers get trap
  handler();

  currentObserver = null;
  isObserving = false;
};

export const unobserve = (handler) => {
  currentObserver = handler;

  handler();

  currentObserver = null;
};

export const observable = (storage) => {
  const observers = {};

  Object.keys(storage).forEach((state) => (observers[state] = new Set()));

  return new Proxy(storage, {
    get(target, state) {
      if (currentObserver && isObserving) observers[state].add(currentObserver);
      else if (currentObserver) observers[state].delete(currentObserver);

      return target[state];
    },
    set(target, state, value) {
      if (isEqual(target[state], value)) return true;

      target[state] = value;
      observers[state].forEach((handler) => handler());

      return true;
    },
  });
};

const isEqual = (oldValue, newValue) => {
  return oldValue === newValue || JSON.stringify(oldValue) === JSON.stringify(newValue);
};
