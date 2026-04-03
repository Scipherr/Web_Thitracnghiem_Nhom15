import { Routes, Route, Navigate } from "react-router-dom";

import DangNhapAdmin from "./admin/DangNhapAdmin";
import QuanLyBaiThi from "./admin/QuanLyBaiThi";
import KetQuaAdmin from "./admin/KetQuaAdmin";
import SinhVien from "./admin/SinhVien";
import ThongTinAdmin from "./admin/ThongTinAdmin";
import ThemBaiThi from "./admin/ThemBaiThi";
import ThemThiSinh from "./admin/ThemThiSinh";
function AppAdmin() {
  return (
    <Routes>

      <Route path="/login" element={<DangNhapAdmin />} />

      <Route path="/baithi" element={<QuanLyBaiThi />} />
      <Route path="/ketqua" element={<KetQuaAdmin />} />
      <Route path="/sinhvien" element={<SinhVien />} />
    <Route path="/thongtin" element={<ThongTinAdmin />} />
      <Route path="/thembaithi" element={<ThemBaiThi />} />
<Route path="/themthisinh" element={<ThemThiSinh />} />

      {/* mặc định */}
      <Route path="/" element={<Navigate to="/admin/login" />} />

    </Routes>
  );
}

export default AppAdmin;