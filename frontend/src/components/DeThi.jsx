import NavbarUser from "./NavbarUser"
import { Link } from "react-router-dom"

function DeThi(){

return(

<div>

<NavbarUser/>

<div style={{padding:"40px"}}>

<h3>Danh sách bài thi</h3>

<div style={{display:"flex", gap:"40px", marginTop:"20px"}}>

{/* Bài thi 1 */}

<div style={card}>

<div style={header}>
Bài thu hoạch Tuần SHCD - sv giữa khóa năm học 2025-2026
</div>

<div style={row}>Thời lượng: 35 phút</div>

<div style={row}>Số lượng câu hỏi: 40</div>

<div style={row}>Số lần làm tối đa: 1</div>

<Link to="/lambai">
<button style={btn}>Thi</button>
</Link>

</div>


{/* Bài thi 2 */}

<div style={card}>

<div style={header}>
Demo
</div>

<div style={row}>Thời lượng: 5 phút</div>

<div style={row}>Số lượng câu hỏi: 5</div>

<div style={row}>Số lần làm tối đa: 10</div>

<Link to="/lambai">
<button style={btn}>Thi</button>
</Link>

</div>

</div>

</div>

</div>

)

}

const card = {
width:"280px",
border:"1px solid #777",
textAlign:"center"
}

const header = {
background:"#b8c79c",
padding:"10px",
fontWeight:"500"
}

const row = {
borderTop:"1px solid #777",
padding:"8px"
}

const btn = {
width:"100%",
background:"#7aa33b",
color:"white",
border:"none",
padding:"10px",
cursor:"pointer"
}

export default DeThi