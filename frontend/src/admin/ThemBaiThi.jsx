import NavbarAdmin from "../layout/NavbarAdmin";

function ThemBaiThi(){

return(

<div>

<NavbarAdmin/>

<div style={container}>

<div style={box}>

<h3>Thêm bài thi</h3>

<label>Tên bài thi</label>
<input style={input}/>

<label>Mô tả</label>
<input style={input}/>

<label>Thời lượng (phút)</label>
<input type="number" style={input}/>

<label>Số câu hỏi</label>
<input type="number" style={input}/>

<label>Trạng thái</label>
<select style={input}>
  <option>Hiện</option>
  <option>Ẩn</option>
</select>

<button style={btn}>Thêm</button>

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
  borderRadius:"20px",
  padding:"30px",
  width:"500px",
  margin:"auto"
};

const input = {
  width:"100%",
  padding:"10px",
  margin:"10px 0",
  borderRadius:"10px",
  border:"none"
};

const btn = {
  marginTop:"15px",
  padding:"10px 20px",
  background:"#3b6fb6",
  color:"white",
  border:"none",
  borderRadius:"15px"
};

export default ThemBaiThi;