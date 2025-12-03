import { useState } from "react"
import Accordion from "./components/Accordion"
import ColorInput from "./components/ColorInput"
import DisableButton from "./components/DisableButton"


function App() {

  const [toogle, setToogle] = useState(false)



  const handleToogleButton = () => {

    setToogle(prev => !prev)
  }


  return (
    <div>
      {/* <Card/>
      <div className={`wrapper ${toogle ? "wrapper-show" : "wrapper-hide"}`}>
        <h1>Toogle button</h1>

        <button className={`btn ${toogle ? "btn-hide" : "btn-show"}`} onClick={handleToogleButton}>
          {toogle ? "hide" : "show"}
        </button>


        {toogle && <p>This is a toogle button example</p>}
      </div> */}
      <Accordion/>
      <ColorInput/>
      <DisableButton/>
    </div>
  )
}

export default App
