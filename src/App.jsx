import { useState } from "react";


function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("")

  return (
    <>
      <header>
        <h1>React Form</h1>
      </header>

      <main>
        <form action="" className="container row">
          <label htmlFor="PostName">Titolo del Post</label>
          <input
            type="text"
            id="PostName"
          />
          <button type="submit">Crea Post</button>
        </form>
      </main>
      
    </>
  )
}

export default App;
