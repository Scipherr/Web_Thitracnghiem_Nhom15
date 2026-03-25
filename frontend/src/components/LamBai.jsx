import NavbarUser from "./NavbarUser"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function LamBai(){

const navigate = useNavigate()
const [selectedAnswer, setSelectedAnswer] = useState(null)

const nopBai = () =>{
navigate("/nopbai")
}

const handleAnswerClick = (answer) => {
setSelectedAnswer(answer)
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

<div style={{...answer, backgroundColor: selectedAnswer === 'a' ? '#e0f7fa' : 'white', cursor: 'pointer'}} onClick={() => handleAnswerClick('a')}>
<input type="radio" name="answer" value="a" checked={selectedAnswer === 'a'} onChange={() => handleAnswerClick('a')} /> a)
</div>
<div style={{...answer, backgroundColor: selectedAnswer === 'b' ? '#e0f7fa' : 'white', cursor: 'pointer'}} onClick={() => handleAnswerClick('b')}>
<input type="radio" name="answer" value="b" checked={selectedAnswer === 'b'} onChange={() => handleAnswerClick('b')} /> b)
</div>
<div style={{...answer, backgroundColor: selectedAnswer === 'c' ? '#e0f7fa' : 'white', cursor: 'pointer'}} onClick={() => handleAnswerClick('c')}>
<input type="radio" name="answer" value="c" checked={selectedAnswer === 'c'} onChange={() => handleAnswerClick('c')} /> c)
</div>
<div style={{...answer, backgroundColor: selectedAnswer === 'd' ? '#e0f7fa' : 'white', cursor: 'pointer'}} onClick={() => handleAnswerClick('d')}>
<input type="radio" name="answer" value="d" checked={selectedAnswer === 'd'} onChange={() => handleAnswerClick('d')} /> d)
</div>

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