const TripleToggleSwitch = ({state, handleTripleSwitch}) => {
    const bgToggle = {
        0: "bg-alternative-primary",
        1: "bg-green-500",
        2: "bg-red-500"
    }

  return (
    <div className="toggle-container bg-gray-500 p-1 rounded-full flex self-center text-white [&>button]:px-3 [&>button]:py-2 [&>button]:rounded-full min-w-min">
        <button onClick={() => {handleTripleSwitch(2)}} className={`${bgToggle[state] == "bg-red-500"? "bg-red-500": "bg-gray-500"} w-[130px] hidden`}>{bgToggle[state] == "bg-red-500"? "Desactivada": "Desactivar"}</button>
        <button onClick={() => {handleTripleSwitch(0)}} className={`${bgToggle[state] == "bg-alternative-primary"? "bg-alternative-primary": "bg-gray-500"}`}></button>
        <button onClick={() => {handleTripleSwitch(1)}} className={`${bgToggle[state] == "bg-green-500"? "bg-green-500": "bg-gray-500"} w-[130px] hidden`}>{bgToggle[state] == "bg-green-500"? "Activada": "Activar"}</button>
        <div className={`h-[40px] w-[40px] rounded-full ${bgToggle[state]}`}></div>
    </div>
  )
}
export default TripleToggleSwitch