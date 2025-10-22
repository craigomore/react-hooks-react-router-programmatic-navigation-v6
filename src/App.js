import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state
  const navigate = useNavigate(); // Hook to programmatically navigate

  const login = () => {
    setIsLoggedIn(true); // Update the login state
  };

  const logout = () => {
    setIsLoggedIn(false); // Update the logout state
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to home when logged in
    } else {
      navigate("/login"); // Navigate to login when logged out
    }
  }, [isLoggedIn, navigate]); // Only run this effect when isLoggedIn changes

  return (
    <div className="app">
      <NavBar logout={logout} />
      <Outlet context={login} /> {/* Pass the login function as context */}
    </div>
  );
}

export default App;
