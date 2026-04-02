import NavbarUser from "../layout/NavbarUser"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function LamBai(){

const navigate = useNavigate()

const questions = [
  {
    id: 1,
    content: "STU là viết tắt của gì?",
    answers: ["Saigon Technology University", "SaiGon Uni", "Student University", "None"],
  }
]

const [selectedAnswer, setSelectedAnswer] = useState({})

const handleSelect = (qId, index) => {
  setSelectedAnswer({
    ...selectedAnswer,
    [qId]: index
  })
}

const nopBai = () => {

  const correctAnswers = {1:0}
  let score = 0

  Object.keys(correctAnswers).forEach((qId)=>{
    if(selectedAnswer[qId] === correctAnswers[qId]){
      score++
    }
  })

  navigate("/nopbai", {
    state: { score, total: questions.length }
  })
}

return(

<div>

<NavbarUser/>

<div className="container mt-4">

<div className="card shadow rounded-4 p-4">

<h4 className="mb-4">Bài thi: Demo</h4>

{questions.map((q,index)=>(
  <div key={q.id} className="mb-4">

    <p><b>Câu {index+1}:</b></p>

    <div className="border rounded-3 p-3 mb-3">
      {q.content}
    </div>

    {q.answers.map((ans,i)=>(
      <div 
        key={i}
        className={`form-check border rounded-3 p-2 mb-2 ${selectedAnswer[q.id]===i ? "bg-info-subtle border-primary" : ""}`}
        onClick={()=>handleSelect(q.id,i)}
        style={{cursor:"pointer"}}
      >
        <input 
          type="radio"
          className="form-check-input"
          checked={selectedAnswer[q.id]===i}
          readOnly
        />
        <label className="form-check-label ms-2">
          {ans}
        </label>
      </div>
    ))}

  </div>
))}

<button className="btn btn-danger rounded-pill px-4" onClick={nopBai}>
Nộp bài
</button>

</div>

</div>

</div>

)

}

export default LamBai