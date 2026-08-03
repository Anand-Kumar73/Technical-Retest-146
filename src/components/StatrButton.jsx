import { useNavigate } from "react-router-dom";
const StartButton=()=>{
  const navigate=()=>{
    function handlleClick(){
      navigate("/Question")
    }
    return(
      <button onClick={handlleClick}>
        Solve Question
      </button>
    )
  }
}