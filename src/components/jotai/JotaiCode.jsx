export default function JotaiCode() {
    const code = `
import { atom } from "jotai";

export const counterAtom=atom(0);
export const doubleCounterAtom=atom((get)=>get(counterAtom)*2);
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
