import NavbarUser from "../layout/NavbarUser"
import { useLocation } from "react-router-dom"

function KetQua(){

const location = useLocation()

// nhận dữ liệu từ NopBai
const { score, total } = location.state || {}

return(

<div>

<NavbarUser/>

<div className="container mt-4">

<div className="card shadow rounded-4 p-4">

<h5 className="mb-3">Kết quả bài thi</h5>

<table className="table table-bordered text-center align-middle">

<thead className="table-light">
<tr>
<th>MSSV</th>
<th>Tên bài thi</th>
<th>Điểm</th>
<th>Kết quả</th>
<th>Hành động</th>
</tr>
</thead>

<tbody>

{score !== undefined ? (
<tr>

<td>DH5220000000</td>
<td>Demo</td>
<td>{score}/{total}</td>

<td>
<span className={`badge ${score === total ? "bg-success" : "bg-warning text-dark"}`}>
{score === total ? "Đạt" : "Chưa đạt"}
</span>
</td>

<td>
<button className="btn btn-sm btn-primary rounded-pill">
Xem chi tiết
</button>
</td>

</tr>
) : (
<tr>
<td colSpan="5">Không có dữ liệu</td>
</tr>
)}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default KetQua