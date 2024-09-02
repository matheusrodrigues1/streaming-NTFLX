import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/login" element={<LoginPage />} />;
      <Route path="/singup" element={<SignUpPage />} />;
    </Routes>
  );
}

export default App;
