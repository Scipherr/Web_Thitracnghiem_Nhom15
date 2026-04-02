import { useNavigate } from "react-router-dom";

function DangNhapAdmin(){

const navigate = useNavigate();

const login = () => {
  navigate("/admin/baithi");
};

return(

<div style={{
  background:"#2e3f63",
  height:"100vh",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}}>

<div style={{
  width:"400px",
  background:"#4a74a5",
  padding:"30px",
  borderRadius:"20px",
  color:"white"
}}>

<h3 style={{textAlign:"center"}}>Admin Login</h3>

<input placeholder="Tài khoản" style={input}/>
<input type="password" placeholder="Mật khẩu" style={input}/>

<button onClick={login} style={btn}>
Đăng nhập
</button>

</div>

</div>

)

}

const input = {
  width:"100%",
  padding:"10px",
  marginTop:"15px",
  borderRadius:"15px",
  border:"none"
}

const btn = {
  width:"100%",
  marginTop:"20px",
  padding:"10px",
  borderRadius:"15px",
  border:"none",
  background:"#1f2f50",
  color:"white"
}

export default DangNhapAdmin;