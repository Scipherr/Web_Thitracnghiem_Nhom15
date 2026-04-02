import NavbarAdmin from "../layout/NavbarAdmin";

function QuanLyBaiThi(){

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<div style={{textAlign:"right"}}>
<button style={btn}>Thêm đề</button>
</div>

<table style={table}>

<thead>
<tr>
<th>ID</th>
<th>Tên bài thi</th>
<th>Mô tả</th>
<th>Thời lượng</th>
</tr>
</thead>

<tbody>

<tr>
<td>1</td>
<td>Demo</td>
<td>Mô tả demo</td>
<td>15 phút</td>
</tr>

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

const table = {
  width:"100%",
  marginTop:"15px"
};

const btn = {
  background:"#3b6fb6",
  color:"white",
  border:"none",
  padding:"10px 20px",
  borderRadius:"20px"
};

export default QuanLyBaiThi;