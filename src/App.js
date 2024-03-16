import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { AuthCotenxtProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Regform from "./pages/Regform";
import ProtectRoute from "./components/ProtectRoute";



function App() {
  return (
    <>
    <AuthCotenxtProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/regform" element={<Regform/>}/>
      <Route path="/account" element={<ProtectRoute><Account/></ProtectRoute>}/>
    </Routes>
    </AuthCotenxtProvider>
    </>
  );
}

export default App;
