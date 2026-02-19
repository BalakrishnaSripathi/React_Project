export default function UseIdHookCode() {
    const code = `
useId Hook:
-----------
useId is a built-in hook introduced in React 18.

It is used to generate unique IDs for accessibility purposes (like linking label and input).

import React, { useId } from 'react'

const UseIdHook = () => {
    const userId=useId();
    const ageId=useId();
  return (
    <div>
      <div>
        <label htmlFor={"user-{userId}"}>User Name</label>
        <input type="text" id={"user-{userId}"} />
      </div>
      <div>
        <label htmlFor={"age-{ageId}"}>Age</label>
        <input type="text" id={"age-{ageId}""} />
      </div>
    </div>
  )
}

export default UseIdHook

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
