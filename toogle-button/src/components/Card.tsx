import { useState } from "react"

const Card = () => {
  const [showDetails, setShowDetails] = useState(false)

  const para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consequuntur dolorum beatae laudantium quisquam aspernatur, culpa dolore tenetur accusamus quia quidem quibusdam dolorem repellat! Non unde tenetur nam cumque modi blanditiis autem ducimus laudantium assumenda, alias ad cupiditate facere expedita iste eos saepe magni ab temporibus error. Impedit ipsum maiores enim incidunt error quae distinctio maxime aperiam, tenetur aut alias a porro magnam accusamus voluptas asperiores nulla id deserunt quibusdam. Omnis atque at incidunt autem rem saepe nesciunt placeat sapiente perspiciatis fuga, est assumenda ad exercitationem in a modi, unde et voluptates cumque debitis laboriosam dolorem eum ab. Soluta, officia?"

  const isLong = para.length > 100

  return (
    <div className="card">
      <h2>Card Component</h2>

      <p>
        {showDetails ? para : para.slice(0, 100) + (isLong ? "..." : "")}
      </p>

      {isLong && (
        <button onClick={() => setShowDetails(prev => !prev)}>
          {showDetails ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  )
}

export default Card
