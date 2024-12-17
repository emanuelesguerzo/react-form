import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("")

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    const newArray = [...posts, newTitle];
    setPosts(newArray);
    setNewTitle("");
  }

  const removePost = (postToRemove) => {
    const newArray = posts.filter(curPost => curPost !== postToRemove);
    setPosts(newArray);
  }

  return (
    <>
      <header>
        <h1>React Form</h1>
      </header>

      <main>
        <form action="" className="container row" onSubmit={handleNewPostSubmit}>
          <label htmlFor="PostName">Titolo del Post</label>
          <input
            type="text"
            placeholder="Scrivi il titolo del tuo Post!"
            id="PostName"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <button type="submit">Crea Post</button>
        </form>

        <ul>
          {posts.map((curPost, index) => (
            <li key={index}>
              <h2>{curPost}</h2>
              <button
                onClick={() => {removePost(curPost)}}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default App;
