import NavbarUser from "./NavbarUser"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function TaiKhoan(){

const navigate = useNavigate()

const [user,setUser]=useState({
  mssv:"",
  email:"",
  password:"",
  holot:"",
  ten:"",
  sdt:""
})

const handleChange=(e)=>{
  const {name,value}=e.target
  setUser({...user,[name]:value})
}

return(

<div>

<NavbarUser/>

<div className="container mt-4">

<div className="card shadow rounded-4 p-4">

<h5 className="mb-3">Thông tin sinh viên</h5>

<input name="mssv" placeholder="MSSV" className="form-control mb-3" onChange={handleChange}/>
<input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange}/>
<input type="password" name="password" placeholder="Mật khẩu" className="form-control mb-3" onChange={handleChange}/>
<input name="holot" placeholder="Họ lót" className="form-control mb-3" onChange={handleChange}/>
<input name="ten" placeholder="Tên" className="form-control mb-3" onChange={handleChange}/>
<input name="sdt" placeholder="SĐT" className="form-control mb-3" onChange={handleChange}/>

<div className="d-flex gap-2">
<button className="btn btn-primary">Lưu</button>
<button className="btn btn-danger" onClick={()=>navigate("/")}>
Đăng xuất
</button>
</div>

</div>

</div>

</div>

)

}

export default TaiKhoan