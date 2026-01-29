export default function ConditionalRenderingCode() {
    const code = `
    import { useState } from "react";
    
    export default function ConditionalRendering() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      return (
        <div>
          <h2>User Status</h2>
    
          {isLoggedIn ? (
            <div>
              <p>Welcome back 👋</p>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          ) : (
            <div>
              <p>Please login</p>
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
            </div>
          )}
        </div>
      );
    }
    


`;

    return (
        <div className="container mt-3">
            <h3>Code</h3>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}
