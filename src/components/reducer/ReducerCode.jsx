export default function Code() {
    const code = `

Reducer:
---------
A function that allows us to centralize state updates in a component.

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
