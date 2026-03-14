import NavbarUser from "./NavbarUser"

function KetQua(){

return(

<div>

<NavbarUser/>

<div className="container mt-4">

<h5>Kết quả các bài thi</h5>

<table className="table table-bordered">

<thead>

<tr>

<th>MSSV</th>
<th>Tên bài thi</th>
<th>Điểm</th>
<th>Kết quả</th>
<th>Hành động</th>

</tr>

</thead>

<tbody>

<tr>

<td colSpan="5">Không có dữ liệu</td>

</tr>

</tbody>

</table>

</div>

</div>

)

}

export default KetQua