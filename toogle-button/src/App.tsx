import { useState } from "react"
import Card from "./components/Card"


function App() {

  const [toogle, setToogle] = useState(false)



  const handleToogleButton = () => {

    setToogle(prev => !prev)
  }


  return (
    <div>
      <Card/>
      <div className={`wrapper ${toogle ? "wrapper-show" : "wrapper-hide"}`}>
        <h1>Toogle button</h1>

        <button className={`btn ${toogle ? "btn-hide" : "btn-show"}`} onClick={handleToogleButton}>
          {toogle ? "hide" : "show"}
        </button>


        {toogle && <p>This is a toogle button example</p>}
      </div>
    </div>
  )
}

export default App
