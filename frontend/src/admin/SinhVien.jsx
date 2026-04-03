import NavbarAdmin from "../layout/NavbarAdmin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SinhVien(){

const navigate = useNavigate();

const [list, setList] = useState([
  {mssv:"DH1", ten:"A", email:"a@", sdt:"0909"},
  {mssv:"DH2", ten:"B", email:"b@", sdt:"0911"}
]);

const [selected, setSelected] = useState(null);
const [search, setSearch] = useState("");

const filtered = list.filter(item =>
  item.ten.toLowerCase().includes(search.toLowerCase())
);

const xoa = () => {
  if(!selected) return alert("Chọn dòng!");
  setList(list.filter(item => item.mssv !== selected));
};

const sua = () => {
  if(!selected) return alert("Chọn dòng!");
  const newName = prompt("Tên mới:");
  if(!newName) return;

  setList(list.map(item =>
    item.mssv === selected ? {...item, ten:newName} : item
  ));
};

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<div style={topBar}>

<input
  placeholder="Tìm sinh viên..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  style={searchInput}
/>

<div style={{display:"flex", gap:"10px"}}>

<button onClick={()=>navigate("/admin/themthisinh")} style={btn}>
  Thêm
</button>

<button onClick={sua} style={editBtn}>
  Sửa
</button>

<button onClick={xoa} style={delBtn}>
  Xóa
</button>

</div>

</div>

<h3>Danh sách sinh viên</h3>

<table style={table}>

<thead>
<tr>
<th></th>
<th>MSSV</th>
<th>Tên</th>
<th>Email</th>
<th>SĐT</th>
</tr>
</thead>

<tbody>

{filtered.map(item => (
<tr key={item.mssv}
    onClick={()=>setSelected(item.mssv)}
    style={{
      background:selected === item.mssv ? "#bcd" : "white",
      cursor:"pointer"
    }}
>
<td>
<input type="radio" checked={selected === item.mssv} readOnly/>
</td>

<td>{item.mssv}</td>
<td>{item.ten}</td>
<td>{item.email}</td>
<td>{item.sdt}</td>

</tr>
))}

</tbody>

</table>

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
  borderRadius:"15px",
  padding:"20px"
};

const topBar = {
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  marginBottom:"15px"
};

const searchInput = {
  padding:"8px",
  borderRadius:"10px",
  border:"none",
  width:"250px"
};

const table = {
  width:"100%",
  marginTop:"15px"
};

const btn = {
  background:"#3b6fb6",
  color:"white",
  padding:"8px 15px",
  borderRadius:"15px",
  border:"none"
};

const editBtn = {
  background:"#f0ad4e",
  padding:"8px 15px",
  borderRadius:"15px",
  border:"none"
};

const delBtn = {
  background:"#d9534f",
  color:"white",
  padding:"8px 15px",
  borderRadius:"15px",
  border:"none"
};

export default SinhVien;