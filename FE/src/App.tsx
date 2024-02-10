import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPage from "./pages/admin/AdminPage";
import TechPage from "./pages/teknisi/TechPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/technicians" element={<TechPage />} />
      </Routes>
    </>
  );
}

export default App;
