export default function ClassComponentCode() {
    const code = `
    import React from "react";
    
    export default class ClassComponent extends React.Component {
        render() {
            return <h1>Hello React</h1>;
        }
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
