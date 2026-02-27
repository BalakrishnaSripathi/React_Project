export default function ManagingComponentCode() {
    const code = `

State Hook:
-----------
=>React Updates state asynchronously.
=>State is stored outside of components.
=>Use hooks at the top level of your component.

Best practices:
--------------
=>Aviod redundant state variables.
=>Group related variable inside an object.
=>Avoid deeply nested structures.

Pure Function:
--------------
Give the same input ,always return the same result.

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
