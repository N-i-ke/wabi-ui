export function createToggle(initial = false) {
  let state = initial;
  return {
    toggle() {
      state = !state;
      return state;
    },
    set(value: boolean) {
      state = value;
    },
    get() {
      return state;
    },
  };
}


