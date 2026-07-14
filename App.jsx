import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>{count}</h1>

      <button style={{padding: "10px", margin: "5px"}} onClick={ () => setCount(count + 1)}
      >
        Increase
      </button>

      <button style={{padding: "10px", margin: "5px"}} onClick={ () => setCount(count - 1)}
      >
        Decrease
      </button>

      <button style={{padding: "10px", margin: "5px"}} onClick={ () => setCount(0)}
      >
        Reset
      </button>

    </div>
  );
}

export default App