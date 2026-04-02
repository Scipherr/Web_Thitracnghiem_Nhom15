import NavbarAdmin from "../layout/NavbarAdmin";

function KetQuaAdmin(){

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<h3 style={{marginBottom:"20px"}}>Kết quả bài thi</h3>

<table style={table}>

<thead>
<tr>
<th>MSSV</th>
<th>Tên bài thi</th>
<th>Ngày</th>
<th>Điểm</th>
<th>Kết quả</th>
</tr>
</thead>

<tbody>

<tr>
<td>DH5220001</td>
<td>Demo</td>
<td>01/11/2025</td>
<td>9</td>
<td style={{color:"green", fontWeight:"bold"}}>Đạt</td>
</tr>

<tr>
<td>DH5220002</td>
<td>Demo</td>
<td>01/11/2025</td>
<td>4</td>
<td style={{color:"red", fontWeight:"bold"}}>Không đạt</td>
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
  padding:"20px"
}

const box = {
  background:"#ddd",
  borderRadius:"15px",
  padding:"20px"
}

const table = {
  width:"100%",
  borderCollapse:"collapse"
}

export default KetQuaAdmin;