import NavbarAdmin from "../layout/NavbarAdmin";
import { useNavigate } from "react-router-dom";

function ThongTinAdmin(){

const navigate = useNavigate();

const logout = () => {
  navigate("/admin/login");
};

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<h3 style={{marginBottom:"20px"}}>Thông tin quản trị viên</h3>

<label>Tài khoản</label>
<input style={input} defaultValue="admin"/>

<label>Email</label>
<input style={input} defaultValue="admin@stu.edu"/>

<label>Mật khẩu</label>
<input type="password" style={input} defaultValue="123456"/>

<label>Họ tên</label>
<input style={input} defaultValue="Admin STU"/>

<button style={saveBtn}>Lưu</button>

<button style={logoutBtn} onClick={logout}>
Đăng xuất
</button>

</div>

</div>

</div>

)

}

const container = {
  background:"#2e3f63",
  minHeight:"100vh",
  padding:"30px"
};

const box = {
  background:"#ddd",
  borderRadius:"20px",
  padding:"30px",
  width:"500px",
  margin:"auto"
};

const input = {
  width:"100%",
  padding:"10px",
  margin:"10px 0",
  borderRadius:"10px",
  border:"none"
};

const saveBtn = {
  marginTop:"10px",
  padding:"10px 20px",
  background:"#3b6fb6",
  color:"white",
  border:"none",
  borderRadius:"15px"
};

const logoutBtn = {
  marginTop:"10px",
  marginLeft:"10px",
  padding:"10px 20px",
  background:"#c94b4b",
  color:"white",
  border:"none",
  borderRadius:"15px"
};

export default ThongTinAdmin;