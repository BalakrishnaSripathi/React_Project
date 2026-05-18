import { useLocalStorage } from "usehooks-ts";

const UseHookApp = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="flex justify-center mb-2.5">
      <div>
        <h1>UseHookApp</h1>
      <label htmlFor="name">Enter Your Name:</label>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="border-1 border-black rounded-2"
    />
    </div>
    </div>
  );
};

export default UseHookApp;