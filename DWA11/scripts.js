// Reducer function
function decrementCounter(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

// Store
const store = {
  state: 0,
  listeners: [],

  getState() {
    return this.state;
  },

  dispatch(action) {
    this.state = decrementCounter(this.state, action);
    this.notifyListeners();
  },

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },

  notifyListeners() {
    this.listeners.forEach((listener) => listener());
  },
};

// Scenario: Increment the counter by one

console.log("Initial state:", store.getState()); // Output: 0
console.log("");

// Scenario: Increment the counter by one

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
console.log("Current state:", store.getState()); // Output: 2
console.log("");

// Scenario: Increment the counter by one

store.dispatch({ type: "SUBTRACT" });
console.log("Current state:", store.getState()); // Output: 1
console.log("");

// Scenario: Resetting the Tally Counter

store.dispatch({ type: "RESET" });
console.log("Current state:", store.getState()); // Output: 0
