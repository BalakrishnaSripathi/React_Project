export default function ComponentCode() {
    const code = `
export default function(){
    return(
        <div>
            <h1>hello React</h1>
        </div>
    )
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
