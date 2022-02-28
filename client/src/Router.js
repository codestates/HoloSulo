import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import EditMypage from "./pages/EditMypage";
import Ending from "./pages/Ending";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Mypage from "./pages/Mypage";
import Signup from "./pages/Signup";
import NaverLoginCallback from "./pages/NaverLoginCallback";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <Layout>
          <Home />
          // </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/menu"
        element={
          <Layout>
            <Menu />
          </Layout>
        }
      />
      <Route
        path="/playlists"
        element={
          <Layout>
            <Menu />
          </Layout>
        }
      />
      <Route
        path="/playlists/:id"
        element={
          <Layout>
            <Menu />
          </Layout>
        }
      />
      <Route
        path="/main"
        element={
          <Layout isTransparent={true}>
            <Main />
          </Layout>
        }
      />
      <Route
        path="/ending"
        element={
          <Layout>
            <Ending />
          </Layout>
        }
      />
      <Route
        path="/mypage"
        element={
          <Layout>
            <Mypage />
          </Layout>
        }
      />
      <Route path="/mypage/edit" element={<EditMypage />} />
      <Route path="/naver/callback" element={<NaverLoginCallback />} />
    </Routes>
  );
}

export default Router;
