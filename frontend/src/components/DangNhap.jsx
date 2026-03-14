import { useNavigate } from "react-router-dom"

function DangNhap(){

const navigate = useNavigate()

const login = () =>{
navigate("/trangchu")
}

return(

<div className="container text-center mt-5">

<h3>Phòng công tác sinh viên STU</h3>

<div className="card p-4 mt-4" style={{width:"400px",margin:"auto"}}>

<label>Tài khoản</label>
<input className="form-control mb-3"/>

<label>Mật khẩu</label>
<input type="password" className="form-control mb-3"/>

<button className="btn btn-primary" onClick={login}>
Đăng nhập
</button>

</div>

</div>

)

}

export default DangNhap