# React Redux Weather App

An intermediate tutorial app aimed at furthering React and Redux concepts and knowledge.

The following `README.md` is to consolidate the key learning points for future reference.

The tutorial can be found [here](https://www.udemy.com/react-redux/)

## Key Learning Points
#### Middleware
- Functions that run in between actions and reducers.

#### Redux-Promise Middleware
- Checks if action payload is a promise.
- If the payload contains a promise, Redux-Promise will stop the data flow, wait for the promise to resolve before creating a new action to be sent to reducers.
- This keeps reducers functions simple, dumb and to only handle updating application state.
- Minimises asynchronous code and keeps code clean (supposedly).

#### Keeping State Immutable
- Be mindful in avoiding state mutations
- Never change the state directly
- Always return a new object/state to the reducer.

```js
// Returns a mutated state - Avoid!
state.push(action.payload.data);

// Returns a new object/state
// Appends new data to end of array
state.concat([ action.payload.data ]);

// Appends new data to start of array
[ action.payload.data, ...state ];
```
