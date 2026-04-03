import NavbarAdmin from "../layout/NavbarAdmin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function QuanLyBaiThi(){

const navigate = useNavigate();

const [list, setList] = useState([
  {id:1, ten:"Demo", mota:"Mô tả demo", time:15},
  {id:2, ten:"SHCD", mota:"Bài thu hoạch", time:35}
]);

const [selected, setSelected] = useState(null);
const [search, setSearch] = useState("");

const filtered = list.filter(item =>
  item.ten.toLowerCase().includes(search.toLowerCase())
);

// Xóa
const xoa = () => {
  if(!selected) return alert("Chọn dòng!");
  setList(list.filter(item => item.id !== selected));
  setSelected(null);
};

// Sửa
const sua = () => {
  if(!selected) return alert("Chọn dòng!");
  const newName = prompt("Tên mới:");
  if(!newName) return;

  setList(list.map(item =>
    item.id === selected ? {...item, ten:newName} : item
  ));
};

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

{/* 🔥 TOP BAR */}
<div style={topBar}>

<input
  placeholder="Tìm bài thi..."
  value={search}
  onChange={(e)=>setSearch(e.target.value)}
  style={searchInput}
/>

<div style={{display:"flex", gap:"10px"}}>

<button onClick={()=>navigate("/admin/thembaithi")} style={btn}>
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

<h3>Quản lý bài thi</h3>

<table style={table}>

<thead>
<tr>
<th></th>
<th>ID</th>
<th>Tên</th>
<th>Mô tả</th>
<th>Thời gian</th>
</tr>
</thead>

<tbody>

{filtered.map(item => (
<tr key={item.id}
    onClick={()=>setSelected(item.id)}
    style={{
      background:selected === item.id ? "#bcd" : "white",
      cursor:"pointer"
    }}
>
<td>
<input
  type="radio"
  checked={selected === item.id}
  readOnly
/>
</td>

<td>{item.id}</td>
<td>{item.ten}</td>
<td>{item.mota}</td>
<td>{item.time} phút</td>

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
  border:"none",
  padding:"8px 15px",
  borderRadius:"15px"
};

const delBtn = {
  background:"#d9534f",
  color:"white",
  border:"none",
  padding:"8px 15px",
  borderRadius:"15px"
};

export default QuanLyBaiThi;