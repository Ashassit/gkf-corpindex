import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const SECRET_PASSWORD = "MySecret123"; // change this to your password
    if (password === SECRET_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // Redirect to home after login
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#080808]">
      <div className="bg-[#111111] border border-white/[0.07] p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 border border-white/[0.1] rounded mb-4 bg-[#111111] text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};
