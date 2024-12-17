import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("")
  const [newAuthor, setNewAuthor] = useState("");

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    if (newTitle.trim() === "" || posts.some((curPost) => curPost.title === newTitle)) {
      const message = newTitle.trim() === "" 
        ? "Aggiungi un titolo" 
        : "Titolo già presente";
      return alert(message);
    }

    const newPost = {
      title: newTitle,
      author: newAuthor
    };

    setPosts([...posts, newPost]);
    setNewTitle("");
    setNewAuthor("");
  }

  const removePost = (postToRemove) => {
    const newArray = posts.filter(curPost => curPost.title !== postToRemove.title);
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
            placeholder="Titolo del Post"
            id="PostName"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />

          <label htmlFor="AuthorName">Nome dell'Autore</label>
          <input
            type="text" 
            placeholder="Nome dell'Autore"
            id="AuthorName"
            value={newAuthor}
            onChange={(event) => setNewAuthor(event.target.value)}
          />
          <button
            type="submit"
            className="btn submit"
          >
            Crea Post
          </button>
        </form>

      {posts.length > 0 ? (
        <ul className="container row">
          {posts.map((curPost, index) => (
            <li 
              key={index}
              className="card"
            >
              <div className="uppercard">
                <h2>{curPost.title}</h2>
                <button
                  className="btn remove"
                  onClick={() => {removePost(curPost)}}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
              <div>
                <span>{curPost.author || "Autore Sconosciuto"}</span>
              </div>  
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-list container row">
          La tua lista è vuota! Aggiungi qualche Post!
        </p>
      )}
      </main>
    </>
  )
}

export default App;
