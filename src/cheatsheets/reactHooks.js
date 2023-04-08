export default {
  kind: "root",
  title: "REACT HOOKS CHEAT SHEET",
  columns: {
    horizontal: 3,
    vertical: 2,
  },
  items: [
    {
      kind: "article",
      title: "useState",
      description: "Lets you use local state within a function component",
      items: [
        {
          kind: "cheat",
          title: "Declare and Update State Variable",
          language: "javascript",
          cheat: `const [count, setCount] = useState(0)
const handleClick = () => setCount(count + 1)

return (
    <div>
    Count value is: {count}
        <div>
            <button onClick={handleClick}>
                Increase!
            </button>
        </div>
    </div>
)`,
          description:
            "The set function returned by useState lets you update the state to a different value and trigger a re-render.",
        },
        {
          kind: "cheat",
          title: "Initialize State from Function",
          language: "javascript",
          cheat: `const [token] = useState(() => {
    let token = window.localStorage.getItem("my-token");
    return token || "default-token"
})

return <div>Token is {token}</div>`,
          description:
            "As opposed to just passing an initial state value, state could also be initialized from a function.",
        },
        {
          kind: "cheat",
          title: "Functional setState",
          language: "javascript",
          cheat: `const [value, updateValue] = useState(0)
//...
updateValue(value => value + 1);`,
          description:
            "The set function can also take a function that calculates it from the previous state.",
        },
      ],
    },
    {
      kind: "article",
      title: "useReducer",
      description: "Lets you add a reducer to your component",
      items: [
        {
          kind: "cheat",
          title: "Basic Usage",
          language: "javascript",
          cheat: `const initialState = { value: 0 }
const reducer = (state, action) => {
  switch (action) {
    case 'plus':
      return { value: state.value + 1 }
    case 'minus':
      return { value: state.value - 1 }
    default:
      throw new Error("Unknown action type" )
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>
    <div>Counter value is: {state.value}</div>
    <button onClick={() => dispatch('plus')}>Increase counter</button>
    <button onClick={() => dispatch('minus')}>Decrease counter</button>
    </>
}`,
          description:
            "The useReducer call returns the state property and a dispatch function. The dispatch function lets you update the state to a different value and trigger a re-render.",
        },
        {
          kind: "cheat",
          title: "Initialize State Lazily",
          language: "javascript",
          cheat: `const initializeState = () => ({ value: 100 });
const [state, dispatch] = useReducer(reducer, initialState, initializeState)`,
          description:
            "useReducer takes a third function parameter. You may initialize state from this function, and whatever's returned from this function is returned as the state object. This function will be called with initialState - the second parameter.",
        },
      ],
    },

    {
      kind: "article",
      title: "useCallback",
      description: "Lets you cache a function definition between re-renders",
      items: [
        {
          kind: "cheat",
          title: "Basic Usage",
          language: "javascript",
          cheat: `const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
    });
}, [productId, referrer]);

return <ShippingForm onSubmit={handleSubmit} />;`,
          description:
            "To cache a function between re-renders of your component, wrap its definition into the useCallback hook. On the following renders, React will compare the dependencies with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with Object.is), useCallback will return the same function as before. Otherwise, useCallback will return the function you passed on this render.",
        },
      ],
    },
    {
      kind: "article",
      title: "useMemo",
      description:
        "Lets you cache the result of a calculation between re-renders",
      items: [
        {
          kind: "cheat",
          title: "Basic Usage",
          language: "javascript",
          cheat: `function TodoList({ todos, tab }) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab),
        [todos, tab]
    );
    // ...
}`,
          description:
            "On the initial render, useMemo returns the result of calling the function with no arguments. During subsequent renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call the function again, and return the result that calculateValue has returned.",
        },
      ],
    },
    {
      kind: "article",
      title: "useRef",
      description: "Lets you reference a value that’s not needed for rendering",
      items: [
        {
          kind: "cheat",
          title: "Referencing a Value",
          language: "javascript",
          cheat: `const intervalRef = useRef(0);

function handleStartClick() {
    const intervalId = setInterval(() => {
        // ...
    }, 1000);
    intervalRef.current = intervalId;
}

function handleStopClick() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
}`,
          description:
            "useRef returns a ref object with a single current property initially set to the initial value you provided. On the next renders, useRef will return the same object. You can change its current property to store information and read it later. Changing a ref does not trigger a re-render.",
        },
        {
          kind: "cheat",
          title: "Accessing the DOM",
          language: "javascript",
          cheat: `const inputRef = useRef(null);

function handleClick() {
    inputRef.current.focus();
}

return <input ref={inputRef} />;`,
          description:
            "After React creates the DOM node and puts it on the screen, React will set the current property of your ref object to that DOM node. Now you can access the DOM node. React will set the current property back to null when the node is removed from the screen.",
        },
      ],
    },
    {
      kind: "article",
      title: "useEffect",
      description: "Lets you synchronize a component with an external system",
      items: [
        {
          kind: "cheat",
          title: "Basic Side Effect",
          language: "javascript",
          cheat: `useEffect(() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)
    return () => {
        window.removeEventListener('click', clicked)
    }
}, [])`,
          description:
            "The useEffect hook acts like componentDidMount method if an empty array is passed as the dependency array. It's pretty common to clean up an effect after some time. Multiple useEffect calls can happen within a functional component.",
        },
        {
          kind: "cheat",
          title: "Skipping Effects with Dependency",
          language: "javascript",
          cheat: `const [randomNumber, setRandomNumber] = useState(0)
const [effectLogs, setEffectLogs] = useState([])

useEffect(
    () => {
        setEffectLogs(logs => [...logs, randomNumber])
    },
    [randomNumber]
)
 
return (
    <div>
        <h1>{randomNumber}</h1>
        <button
            onClick={() => {
                setRandomNumber(Math.random())
            }}
        >
            Generate random number!
        </button>
        <div>
            {effectLogs.map(log => (
                <div key={index}>{log}</div>
            ))}
        </div>
    </div>
)`,
          description:
            "The effect function will be called on mount and whenever a new reactive value is generated. Reactive values include props, state, and all the variables and functions declared directly inside your component body.",
        },
        {
          kind: "cheat",
          title: "No Array Dependency",
          language: "javascript",
          cheat: `useEffect(() => {
    console.log("This will be logged after every render!")
})`,
          description:
            "Without an array dependency, the effect function will be run after every single render.",
        },
      ],
    },
    {
      kind: "article",
      title: "useLayoutEffect",
      description: "Fires before the browser repaints the screen",
      items: [
        {
          kind: "cheat",
          title: "Layout Measurements",
          language: "javascript",
          cheat: `const ref = useRef(null);
const [tooltipHeight, setTooltipHeight] = useState(0);

useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
}, []);`,
          description:
            "React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen. This lets you render the component, measure it, and re-render the component again without the user noticing the first extra render. In other words, useLayoutEffect blocks the browser from painting.",
        },
      ],
    },
  ],
};
