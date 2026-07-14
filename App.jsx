import { useState } from "react"; 

function App() {
  const isLogin = false;

  return (
    <div>
      {isLogin
      ? <h1>Welcome Back</h1>
      : <h1>Please Login</h1>
      }
    </div>
  )
}

export default App;