import NavbarUser from "./NavbarUser"

function NopBai(){

return(

<div>

<NavbarUser/>

<div style={{padding:"40px"}}>

<table style={{width:"600px",border:"1px solid #999"}}>

<tr>
<td style={td}>MSSV</td>
<td style={td}>DH5220000000</td>
</tr>

<tr>
<td style={td}>Tên bài thi</td>
<td style={td}>Bài thu hoạch Tuần SHCD - SV giữa khóa năm học 2025-2026</td>
</tr>

<tr>
<td style={td}>Thời gian hoàn thành</td>
<td style={td}>00:00:05 01/11/2025</td>
</tr>

</table>

<br/>

<h3>Nộp bài thành công!</h3>

</div>

</div>

)

}

const td={
border:"1px solid #999",
padding:"10px"
}

export default NopBai