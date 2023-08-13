import { useState } from "react"

function CreatePostPage() {
    const [title,setTitle] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
    };

  return (
    <div>
      <h2>Create New post</h2>
       <form onSubmit={handleSubmit}>
         <div className="one_score">
          <label>Title:</label>
          <input
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           type="text" />
        </div>
        <div className="two_score">
           <label>Body:</label>
           <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
           ></textarea>
        </div>
          <button type="submit">
            Send to server
          </button>
       </form>
    </div>
  )
}

export default CreatePostPage
