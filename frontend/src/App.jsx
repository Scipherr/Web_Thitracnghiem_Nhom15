import { Routes, Route } from "react-router-dom";

import Index from "./components/user/FEuser/Index";
import TrangChu from "./components/user/FEuser/TrangChu";

import KetQua from "./components/user/FEuser/KetQua";
import TaiKhoan from "./components/user/FEuser/TaiKhoan";
import DangNhap from "./components/user/FEuser/DangNhap";
import LamBai from "./components/user/FEuser/LamBai";
import NopBai from "./components/user/FEuser/NopBai";

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<Index />} />

      {/* Login */}
      <Route path="/dangnhap" element={<DangNhap />} />

      {/* Trang chính sau khi login */}
      <Route path="/trangchu" element={<TrangChu />} />

      {/* Thi */}
    
      <Route path="/lambai" element={<LamBai />} />
      <Route path="/nopbai" element={<NopBai />} />
      <Route path="/ketqua" element={<KetQua />} />

      {/* Tài khoản */}
      <Route path="/taikhoan" element={<TaiKhoan />} />

      {/* Test API */}
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />

    </Routes>
  );
}

export default App;