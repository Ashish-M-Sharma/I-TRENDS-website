import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();

    if (isSignUp) {
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Sign-up successful! You can now sign in.");
      setIsSignUp(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (
        storedUser &&
        storedUser.email === userData.email &&
        storedUser.password === userData.password
      ) {
        alert("Sign-in successful!");
        navigate("/");
        window.scrollTo(0, 0); // Scroll to top after redirection
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        <form onSubmit={handleAuth} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleInputChange}
            required
            className="w-full border py-2 px-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleInputChange}
            required
            className="w-full border py-2 px-3 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-3 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-blue-500 font-semibold hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
