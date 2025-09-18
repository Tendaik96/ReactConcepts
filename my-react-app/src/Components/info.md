## 🔧 Core React Hooks (Fundamental to Component Logic)

### 1. **`useState`**
- **Purpose**: Manages local state within functional components.
- **How it works**: Returns a stateful value and a function to update it. React re-renders the component when the setter is called.
- **Why it matters**: It's the backbone of interactivity — toggling modals, tracking form inputs, managing counters, etc.
- **Example**:
  ```jsx
  const [count, setCount] = useState(0);
  ```

### 2. **`useEffect`**
- **Purpose**: Handles side effects — anything outside the render cycle (e.g., data fetching, subscriptions).
- **How it works**: Runs after render. You can control when it runs using the dependency array.
- **Why it matters**: Keeps your UI in sync with external systems or browser APIs.
- **Example**:
  ```jsx
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  ```

### 3. **`useContext`**
- **Purpose**: Accesses shared state across components without prop drilling.
- **How it works**: Consumes a context created with `React.createContext()`.
- **Why it matters**: Ideal for global themes, authentication, or user preferences.
- **Example**:
  ```jsx
  const theme = useContext(ThemeContext);
  ```

### 4. **`useRef`**
- **Purpose**: Stores mutable values that persist across renders without triggering re-renders.
- **How it works**: Returns a `.current` object that can hold any value.
- **Why it matters**: Useful for accessing DOM nodes, timers, or tracking previous values.
- **Example**:
  ```jsx
  const inputRef = useRef(null);
  ```

### 5. **`useMemo`**
- **Purpose**: Memoizes expensive computations.
- **How it works**: Returns a cached result unless dependencies change.
- **Why it matters**: Prevents unnecessary recalculations, especially in performance-critical components.
- **Example**:
  ```jsx
  const sortedList = useMemo(() => sortList(list), [list]);
  ```

### 6. **`useCallback`**
- **Purpose**: Memoizes functions.
- **How it works**: Returns the same function instance unless dependencies change.
- **Why it matters**: Prevents unnecessary re-renders in child components that rely on stable function props.
- **Example**:
  ```jsx
  const handleClick = useCallback(() => doSomething(), []);
  ```

---

## 🧠 Advanced React Hooks (For Complex Logic and Performance)

### 7. **`useReducer`**
- **Purpose**: Manages complex state logic with predictable updates.
- **How it works**: Accepts a reducer function and initial state, returns current state and dispatch function.
- **Why it matters**: Great for managing state transitions, especially in forms or multi-step flows.
- **Example**:
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```

### 8. **`useLayoutEffect`**
- **Purpose**: Like `useEffect`, but runs *synchronously* after DOM mutations.
- **How it works**: Blocks the browser paint until it finishes.
- **Why it matters**: Use only when you need to measure layout or apply styles before paint (e.g., animations).
- **Warning**: Can cause performance issues if misused.

### 9. **`useImperativeHandle`**
- **Purpose**: Customizes what a parent component can access via `ref`.
- **How it works**: Used with `forwardRef` to expose specific methods or properties.
- **Why it matters**: Useful for building reusable components like modals or input controls.
- **Example**:
  ```jsx
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));
  ```

### 10. **`useDebugValue`**
- **Purpose**: Adds labels to custom hooks for React DevTools.
- **How it works**: Displays debug info in DevTools without affecting runtime.
- **Why it matters**: Helps with debugging complex custom hooks.

---

## 🧬 React 18+ Concurrent Features

### 11. **`useTransition`**
- **Purpose**: Marks updates as non-urgent.
- **How it works**: Allows React to interrupt and prioritize rendering.
- **Why it matters**: Improves responsiveness in apps with heavy UI updates.

### 12. **`useDeferredValue`**
- **Purpose**: Defers re-rendering of non-critical updates.
- **How it works**: Returns a deferred version of a value.
- **Why it matters**: Keeps the UI responsive during slow renders.

### 13. **`useId`**
- **Purpose**: Generates unique IDs for accessibility and hydration consistency.
- **How it works**: Ensures consistent IDs between server and client.
- **Why it matters**: Crucial for SSR and accessibility.

### 14. **`useSyncExternalStore`**
- **Purpose**: Subscribes to external stores with consistent updates.
- **How it works**: Used by libraries like Redux to integrate with React 18.
- **Why it matters**: Ensures compatibility with concurrent rendering.

┌────────────────────────────┐
│         useState           │ → Local state
├────────────────────────────┤
│         useEffect          │ → Side effects
├────────────────────────────┤
│         useContext         │ → Global/shared state
├────────────────────────────┤
│         useRef             │ → Persistent mutable values
├────────────────────────────┤
│         useMemo            │ → Cached computations
├────────────────────────────┤
│         useCallback        │ → Stable function references
├────────────────────────────┤
│         useReducer         │ → Complex state logic
├────────────────────────────┤
│         useLayoutEffect    │ → DOM measurements
├────────────────────────────┤
│         useImperativeHandle│ → Expose custom ref methods
└────────────────────────────┘