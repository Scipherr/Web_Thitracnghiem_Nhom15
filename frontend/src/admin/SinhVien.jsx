import NavbarAdmin from "../layout/NavbarAdmin";

function SinhVien(){

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<div style={{textAlign:"right"}}>
<button style={btn}>Thêm sinh viên</button>
</div>

<table style={table}>

<thead>
<tr>
<th>MSSV</th>
<th>Họ tên</th>
<th>Email</th>
<th>SĐT</th>
<th>Quyền</th>
</tr>
</thead>

<tbody>

<tr>
<td>DH522001</td>
<td>Nguyễn Văn A</td>
<td>a@student.com</td>
<td>0909xxxx</td>
<td>User</td>
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
  borderCollapse:"collapse",
  marginTop:"15px"
};

const btn = {
  background:"#3b6fb6",
  color:"white",
  border:"none",
  padding:"10px 20px",
  borderRadius:"20px"
};

export default SinhVien;