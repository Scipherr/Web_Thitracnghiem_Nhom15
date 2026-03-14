import NavbarUser from "./NavbarUser"
import { useNavigate } from "react-router-dom"

function LamBai(){

const navigate = useNavigate()

const nopBai = () =>{
navigate("/nopbai")
}

return(

<div>

<NavbarUser/>

<div style={{padding:"30px"}}>

<h3>Bài thi: Demo</h3>

<p>Câu hỏi 1:</p>

<div style={{border:"1px solid #999",padding:"20px",marginBottom:"20px"}}>
Nội dung câu hỏi
</div>

<div style={answer}>a)</div>
<div style={answer}>b)</div>
<div style={answer}>c)</div>
<div style={answer}>d)</div>

<br/>

<button onClick={nopBai} style={submitBtn}>
Nộp bài
</button>

</div>

</div>

)

}

const answer={
border:"1px solid #999",
padding:"10px"
}

const submitBtn={
background:"#d66c4c",
color:"white",
border:"none",
padding:"10px 20px"
}

export default LamBai