// Reducer function
function decrementCounter(state = 0, action) {
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
  state: 0, // Initialize the state to 0.
  listeners: [], // An array to hold listener functions.

  getState() {
    return this.state; // Method to get the current state.
  },

  dispatch(action) {
    // Method to dispatch an action and update the state using the reducer.
    this.state = decrementCounter(this.state, action);
    this.notifyListeners(); // Notify all subscribed listeners.
  },

  subscribe(listener) {
    // Method to subscribe a listener function.
    this.listeners.push(listener);

    // Return a function to unsubscribe the listener.
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },

  notifyListeners() {
    // Method to notify all subscribed listeners.
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

// Scenario: Decrement the counter by one
store.dispatch({ type: "SUBTRACT" });
console.log("Current state:", store.getState()); // Output: 1
console.log("");

// Scenario: Resetting the Tally Counter
store.dispatch({ type: "RESET" });
console.log("Current state:", store.getState()); // Output: 0
