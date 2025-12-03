import { useState } from "react"


function App() {

  const  [toogle,setToogle] = useState(false)



  const handleToogleButton = () => {

    setToogle(prev => !prev)
  }
  

  return (
    <div style={{backgroundColor: toogle ? "red" : "gray"}}>
      <h1>Toogle button</h1>

      <button style={{ backgroundColor: toogle ? "red" : "green" }} onClick={handleToogleButton}>
        {toogle ? "hide" : "show"}
      </button>


      {toogle && <p>This is a toogle button example</p>}
    </div>
  )
}

export default App
