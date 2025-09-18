
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
      <p>
        useContext is used to share state logic across multiple components, this
        is done to prevent prop drilling when just simply using useState in a
        component that needs to pass props to multiple children
      </p>
      <h5>useReducer</h5>
      <p>
        This is used when state logic become complicated in a single component
      </p>
      <h5>React-Redux</h5>
      <p>
        This is used to manage state globally, especially when looking to
        increase scalability
      </p>
      <h6>Link https://react-redux.js.org/</h6>
      <h4>Boosting Speed with Code Splitting and Lazy Loading</h4>
      
      <p>Two powerful
      techniques for improving web performance are code splitting and lazy
      loading. These strategies help reduce initial load times and improve user
        experience, especially in React applications.</p>
      <ul>
        <li>
        Code Splitting: This
      technique divides your app into smaller, manageable chunks. Instead of
      loading the entire application upfront, only the necessary parts are
      delivered, reducing the bundle size and speeding up load times. 
      </li>
        <li>
         Loading: With lazy loading, non-critical resources are loaded only when
      they're needed—like when a user navigates to a new page or interacts with
      a specific component. This minimizes initial payload and keeps your app
      snappy. 
      </li>
      </ul> 
      
      
    </>
  );
}
