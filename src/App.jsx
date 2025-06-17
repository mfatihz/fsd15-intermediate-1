import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import UnderDevelopment from "./components/pages/under-development";
import Register from "./components/pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Navlinks */}
        <Route path="/series" element={<UnderDevelopment tag="Series" />} />
        <Route path="/movies" element={<UnderDevelopment tag="Movies" />} />
        <Route path="/lists" element={<UnderDevelopment tag="Lists" />} />
        {/* Menu */}
        <Route path="/profile" element={<UnderDevelopment tag="Profile" header={<p>mfatihz.std@gmail.com</p>}/>} />
        <Route path="/premium" element={<UnderDevelopment tag="Premium" />} />
        {/* Auth */}
        <Route path="/forgot-password" element={<UnderDevelopment to="/login" tag="Login">Kembali ke Login</UnderDevelopment>} />
        <Route path="/oauth" element={<UnderDevelopment to="/login" tag="Login">Kembali ke Login</UnderDevelopment>} />
        {/* Footer */}
        <Route path="/genre/:genreId" element={<UnderDevelopment tag="Genre" />} />
        <Route path="/help/:helpId" element={<UnderDevelopment tag="Help" />} />
        {/* Catch-all route untuk path lain di footer */}
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App