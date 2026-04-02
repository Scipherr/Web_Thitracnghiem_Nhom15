import { useNavigate } from "react-router-dom"
import { useState } from "react";

function DangNhap(){

const navigate = useNavigate()

const [mssv, setMssv] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const API_BASE_URL = 'https://web-thitracnghiem-nhom15.onrender.com/api';
const login = async () => {
    setError(""); 
    
    try {
      
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ mssv, password }),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
       
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("token", data.token);
        
        
        navigate("/trangchu");
      } else {
        setError(data.message || "Đăng nhập thất bại");
      }
    } catch (err) {
      console.error(err);
      setError("Không thể kết nối đến server. Vui lòng thử lại sau.");
    }
  };

return(

<div className="bg-light vh-100 text-center">

{/* Logo */}
<img 
src="/img/hinhSTU.png"
alt=""
style={{width:"80px", marginTop:"60px"}}
/>

<h3 className="mt-2 fw-bold">
Phòng công tác sinh viên STU
</h3>

{/* Form */}
<div 
className="mx-auto mt-4 p-4 shadow"
style={{
  width:"500px",
  background:"#eee",
  borderRadius:"30px",
  border:"1px solid #555"
}}
>

<label className="d-block text-start fs-5 mb-2">
Tài khoản
</label>

<input 
className="form-control mb-3"
style={{
  background:"#cfe3e6",
  border:"none",
  padding:"12px"
}}
/>

<label className="d-block text-start fs-5 mb-2">
Mật khẩu
</label>

<input 
type="password"
className="form-control mb-3"
style={{
  background:"#cfe3e6",
  border:"none",
  padding:"12px"
}}
/>

<button 
className="btn text-white mt-3 px-4 py-2"
style={{
  background:"#2d8acb",
  borderRadius:"20px"
}}
onClick={login}
>
Đăng nhập
</button>

</div>

</div>

)

}

export default DangNhap