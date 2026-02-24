import { useActionState } from "react";

async function loginAction(prevState, formData) {
  const username = formData.get("username");

  if (!username) {
    return { error: "Username required" };
  }

  return { success: `Welcome ${username}` };
}

export default function UseActionState() {
  const [state, formAction, isPending] =
    useActionState(loginAction, {});

  return (
    <div>
      <form action={formAction}>
        <input name="username" placeholder="Enter name" />
        <button disabled={isPending} className='bg-blue-600 text-white rounded-2 hover:bg-blue-700 p-1 active:scale-95'>
          {isPending ? "Loading..." : "Submit"}
        </button>
      </form>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
    </div>
  );
}