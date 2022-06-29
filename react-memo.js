// # React Hooks:
// 1. useState: Declare a state in a function component.
const [count, setCount] = useState(3);
const [counter, setCounter] = useState(() => { return 3 }) // state value only run once (When the component first mounted).
// 2. useEffect
useEffect(() => { console.log("I run everytime this component rerenders") }) // Every rerender
useEffect(() => { console.log("I Only run once (When the component gets mounted)") }, []) // onMount
useEffect(() => { console.log("I run everytime my condition is changed") }, [condition]) // Condition based 
useEffect(() => { return () => { console.log("Use this return as a 'clean up tool' (this runs when unmounting and before the actual code)") } }); // Clean up
// 3. useMemo: will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
const memoizedValue = useMemo(() => { computeExpensiveValue(a, b) }, [a, b]);
// 4. useRefs: Same like state but its doesn't cause a re-render when its value updated.
const inputEl = useRef(null);
// 5. useContext: 
