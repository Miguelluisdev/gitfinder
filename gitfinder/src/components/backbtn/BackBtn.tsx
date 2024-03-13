import { useNavigate } from "react-router-dom"


const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <>
    <button onClick={() => navigate(-1)} className="text-white font-bold bg-blue-600 px-4 py-2 rounded hover:bg-blue-700" >Voltar</button>
    </>
  )
}
export default BackBtn