export default function UseActionStateCode() {
    const code = `
useActionState Hook:
--------------------
useActionState is a new React hook used mainly for form actions.
It helps manage form submission state + server action result easily.

import { useActionState } from "react";

async function loginAction(prevState, formData) {
  const username = formData.get("username");

  if (!username) {
    return { error: "Username required" };
  }

  return { success: Welcome {username} };
}

export default function Login() {
  const [state, formAction, isPending] =
    useActionState(loginAction, {});

  return (
    <div>
      <form action={formAction}>
        <input name="username" placeholder="Enter name" />
        <button disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </button>
      </form>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
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
