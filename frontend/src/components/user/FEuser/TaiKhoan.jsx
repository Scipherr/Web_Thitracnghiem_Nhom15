import NavbarUser from "./NavbarUser"
import { useNavigate } from "react-router-dom"

function TaiKhoan(){

const navigate = useNavigate()

const logout = () => {
  navigate("/")
}

return(

<div>

<NavbarUser/>

<div className="container mt-4">

<h5>Thông tin sinh viên</h5>

<div className="card p-4">

<label>MSSV</label>
<input className="form-control mb-3"/>

<label>Email</label>
<input className="form-control mb-3"/>

<label>Mật khẩu</label>
<input type="password" className="form-control mb-3"/>

<label>Họ lót</label>
<input className="form-control mb-3"/>

<label>Tên</label>
<input className="form-control mb-3"/>

<label>Số điện thoại</label>
<input className="form-control mb-3"/>

<button className="btn btn-primary mb-2">
Lưu
</button>

<button className="btn btn-danger" onClick={logout}>
Đăng xuất
</button>

</div>

</div>

</div>

)

}

export default TaiKhoan