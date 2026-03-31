import { Link } from "react-router-dom"

function NavbarUser() {

return (

<div style={{border:"1px solid #ccc", background:"#f5f5f5"}}>

<div style={{display:"flex"}}>

<Link to="/trangchu" style={style}>
Phòng CTSV STU
</Link>

<Link to="/dethi" style={style}>
Đề thi
</Link>

<Link to="/ketqua" style={style}>
Kết quả
</Link>

<Link to="/taikhoan" style={style}>
Tài khoản
</Link>

{/* <Link to="/userlist" style={style}>
Người dùng
</Link> */}

</div>

</div>

)

}

const style = {
padding:"12px 20px",
borderRight:"1px solid #ccc",
textDecoration:"none",
color:"#007bff"
}

export default NavbarUser