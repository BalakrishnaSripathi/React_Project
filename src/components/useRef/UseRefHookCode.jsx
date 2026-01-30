export default function UseRefHookCode() {
    const code = `
    import { useEffect, useRef, useState } from "react";
    
    export default function PreviousValue() {
      const [count, setCount] = useState(0);
      const prevCount = useRef(0);
    
      useEffect(() => {
        prevCount.current = count;
      }, [count]);
    
      return (
        <div>
          <p>Current: {count}</p>
          <p>Previous: {prevCount.current}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      );
    }
    


`;

    return (
        <div className="container mt-3">
            <h3> Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
