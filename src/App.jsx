// import { BrowserRouter, Routes, Route } from "react-router";
// import { Link } from "react-router";
// import Home from "./components/pages/home"
// import Login from "./components/pages/login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       {/* <Route path="/" element={<Home />} /> */}
//       <Route index element={<Home />} />
//       <Route path="/series" element={<>Series not yet developed | <Link to="/">Back</Link></>} />
//       <Route path="/movies" element={<>Movies not yet developed | <Link to="/">Back</Link></>} />
//       <Route path="/lists" element={<>My Lists not yet developed | <Link to="/">Back</Link></>} />
//       <Route path="/profile" element={<>My Profile not yet developed | <Link to="/">Back</Link></>} />
//       <Route path="/premium" element={<>Change to Premium not yet developed | <Link to="/">Back</Link></>} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
        
//       </BrowserRouter>
//   )
// }
    
// export default App
import { BrowserRouter, Routes, Route } from "react-router";
import { Link } from "react-router";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import UnderDevelopment from "./components/pages/under-development";
import Register from "./components/pages/register";

// const UnderDevelopment = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-black text-white">
//             <div className="text-center">
//                 <h1 className="text-2xl mb-4">Halaman sedang dalam pengembangan</h1>
//                 <Link 
//                     to="/" 
//                     className="text-blue-500 hover:underline"
//                 >
//                     Kembali ke Beranda
//                 </Link>
//             </div>
//         </div>
//     );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Navlinks */}
        <Route path="/series" element={<UnderDevelopment />} />
        <Route path="/movies" element={<UnderDevelopment />} />
        <Route path="/lists" element={<UnderDevelopment />} />
        {/* Menu */}
        <Route path="/profile" element={<UnderDevelopment />} />
        <Route path="/premium" element={<UnderDevelopment />} />
        {/* Auth */}
        <Route path="/forgot-password" element={<UnderDevelopment to="/login">Kembali ke Login</UnderDevelopment>} />
        {/* Genre */}
        <Route path="/genre/:genreId" element={<UnderDevelopment />} />
        {/* Bantuan */}
        <Route path="/help/:helpId" element={<UnderDevelopment />} />
        {/* Catch-all route untuk path lain di footer */}
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App