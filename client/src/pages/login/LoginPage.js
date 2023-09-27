import React, { useState } from "react";
import { useAuth } from "../../components/authcontext/AuthContext";

function LoginPage() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const handleLogin = () => {
    login(username, password)
  }

return (
  <div>
    <h2>Login</h2>
    <form>
      <label>
        Username: 
        <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password: 
        <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleLogin} >
          Login
      </button>
    </form>
  </div>
)

}

export default LoginPage
