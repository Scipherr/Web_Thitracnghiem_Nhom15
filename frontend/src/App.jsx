import { Routes, Route } from "react-router-dom";

import TrangChu from "./components/TrangChu";
import DeThi from "./components/DeThi";
import KetQua from "./components/KetQua";
import TaiKhoan from "./components/TaiKhoan";
import DangNhap from "./components/DangNhap";
import LamBai from "./components/LamBai";
import NopBai from "./components/NopBai";

function App() {
  return (

    <div>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/"></Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/users">Danh sách người dùnga</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <Routes>
      <Route path="/" element={<DangNhap />} />

      <Route path="/trangchu" element={<TrangChu />} />

      <Route path="/dethi" element={<DeThi />} />

      <Route path="/ketqua" element={<KetQua />} />

      <Route path="/taikhoan" element={<TaiKhoan />} />

      <Route path="/lambai" element={<LamBai />} />

      <Route path="/nopbai" element={<NopBai />} />
    </Routes>
  );
} 

export default App;