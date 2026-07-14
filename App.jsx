import { useState } from "react"; 

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {/* Changed parenthesies to curly braces below */}
      <h1>{isLogin ? "Welcome!" : "Please Login"}</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;