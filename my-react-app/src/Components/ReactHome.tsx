
export default function ReactHome() {
  return (
    <>
      <a className="App-link" href="https://reactjs.org" target="_blank">
        React
      </a>
      <h1>What is React?</h1>
      <h3>React concepts:</h3>
      <h4>Hooks</h4>
      <h5>Hooks relating to state</h5>
      <h5>UseState</h5>
      <p>useState is used to manage simple state logic</p>
      <h5>useContext</h5>
      <p>useContext is used to share state logic across multiple components, this is done to prevent prop drilling when just simply using useState in a component that needs to pass props to multiple children</p>
      <h5>useReducer</h5>
      <p>This is used when state logic become complicated in a single component</p>
      <h5>React-Redux</h5>
      <p>This is used to manage state globally, especially when looking to increase scalability</p>
      <h6>Link https://react-redux.js.org/</h6>
    </>
  );
}
