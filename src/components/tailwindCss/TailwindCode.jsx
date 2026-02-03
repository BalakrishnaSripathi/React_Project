export default function TailwindCode() {
    const code = `
Install Tailwind CSS:
----------------------

npm create vite@latest my-project
cd my-project

npm install tailwindcss @tailwindcss/vite

Configure the Vite plugin:
-------------------------

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

Import Tailwind CSS:
-------------------
@import "tailwindcss";


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
