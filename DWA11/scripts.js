// Reducer function
function counterReducer(state = 0, action) {
  // The reducer function takes the current state and an action as parameters.

  switch (action.type) {
    case "ADD":
      // If the action type is "ADD," increment the state by 1.
      return state + 1;
    case "SUBTRACT":
      // If the action type is "SUBTRACT," decrement the state by 1.
      return state - 1;
    case "RESET":
      // If the action type is "RESET," set the state back to 0.
      return 0;
    default:
      // For any other action type, return the current state as is.
      return state;
  }
}

// Store
const store = {
  state: 0,
  listeners: [],

  // Method to get the current state.
  getState() {
    return this.state;
  },

  // Method to dispatch an action and update the state using the reducer.
  dispatch(action) {
    this.state = counterReducer(this.state, action);
    this.notifyListeners();
  },

  // Method to subscribe a listener function.
  subscribe(listener) {
    this.listeners.push(listener);

    // Return a function to unsubscribe the listener.
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },

  // Method to notify all subscribed listeners.
  notifyListeners() {
    this.listeners.forEach((listener) => listener());
  },
};

// Scenarios
console.log("Initial state:", store.getState()); // Output: 0

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
console.log("Current state:", store.getState()); // Output: 2

store.dispatch({ type: "SUBTRACT" });
console.log("Current state:", store.getState()); // Output: 1

store.dispatch({ type: "RESET" });
console.log("Current state:", store.getState()); // Output: 0
