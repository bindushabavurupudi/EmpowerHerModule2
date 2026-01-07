import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
    navigate("/todos");
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <input className="border p-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 mt-2" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="mt-4 bg-black text-white px-4 py-2">Login</button>
    </div>
  );
};

export default Login;
