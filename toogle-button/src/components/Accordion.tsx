import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

const data = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    title: "What is a component?",
    content: "A component is a reusable piece of UI."
  },
  {
    title: "What is state?",
    content: "State is data that changes over time and triggers re-renders."
  }
]


const Accordion = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToogleAccordion = (togeledItem:number) => {

        
      if(openIndex === togeledItem){
        setOpenIndex(null)
      }else{
        setOpenIndex(togeledItem)
      }

    }
  return (
    <div>
        {data.map((item,index)=>(
          <div key={index}>
            <h3>{item.title}<FaAngleDown  onClick={() => handleToogleAccordion(index)}/></h3>
            {openIndex === index && <p>{item.content}</p>}
          </div>
        ))}
    </div>
  )
}

export default Accordion