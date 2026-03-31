import { Routes, Route } from "react-router-dom";

import TrangChu from "./components/user/FEuser/TrangChu";
import DeThi from "./components/user/FEuser/DeThi";
import KetQua from "./components/user/FEuser/KetQua";
import TaiKhoan from "./components/user/FEuser/TaiKhoan";
import DangNhap from "./components/user/FEuser/DangNhap";
import LamBai from "./components/user/FEuser/LamBai";
import NopBai from "./components/user/FEuser/NopBai";
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
function App() {
  return (
    <Routes>
      <Route path="/" element={<DangNhap />} />
      <Route path="/users" element={<UserList />} />

      <Route path="/trangchu" element={<TrangChu />} />

      <Route path="/dethi" element={<DeThi />} />

      <Route path="/ketqua" element={<KetQua />} />

      <Route path="/taikhoan" element={<TaiKhoan />} />

      <Route path="/lambai" element={<LamBai />} />

      <Route path="/nopbai" element={<NopBai />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default App;