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
        <Route path="/series" element={<UnderDevelopment tag="Series" />} />
        <Route path="/movies" element={<UnderDevelopment tag="Movies" />} />
        <Route path="/lists" element={<UnderDevelopment tag="My-List" />} />
        {/* Menu */}
        <Route path="/profile" element={<UnderDevelopment tag="Profile" header={<p>mfatihz.std@gmail.com</p>}/>} />
        <Route path="/premium" element={<UnderDevelopment tag="Premium" />} />
        {/* Auth */}
        <Route path="/forgot-password" element={<UnderDevelopment to="/login" tag="Login">Kembali ke Login</UnderDevelopment>} />
        {/* Genre */}
        <Route path="/genre/:genreId" element={<UnderDevelopment tag="Genre" />} />
        {/* Bantuan */}
        <Route path="/help/:helpId" element={<UnderDevelopment tag="Help" />} />
        {/* Catch-all route untuk path lain di footer */}
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App