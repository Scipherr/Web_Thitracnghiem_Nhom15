import { Routes, Route } from "react-router-dom"

import TrangChu from "./components/TrangChu"
import DeThi from "./components/DeThi"
import KetQua from "./components/KetQua"
import TaiKhoan from "./components/TaiKhoan"
/*import UserList from "./components/UserList"
*/
import Dangnhap from "./components/Dangnhap"
import LamBai from "./components/LamBai"
import NopBai from "./components/NopBai"
function App(){

return(

<Routes>

<Route path="/" element={<Dangnhap />} />

<Route path="/trangchu" element={<TrangChu />} />

<Route path="/dethi" element={<DeThi />} />

<Route path="/ketqua" element={<KetQua />} />

<Route path="/taikhoan" element={<TaiKhoan />} />

{/* <Route path="/userlist" element={<UserList />} /> */}
<Route path="/lambai" element={<LamBai />} />

<Route path="/nopbai" element={<NopBai/>}/>
</Routes>

)

}

export default App