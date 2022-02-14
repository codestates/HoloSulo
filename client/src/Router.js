import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditMypage from "./pages/EditMypage";
import Ending from "./pages/Ending";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/main" element={<Main />} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/edit" element={<EditMypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
