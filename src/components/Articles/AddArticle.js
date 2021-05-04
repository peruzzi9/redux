import React, { useState } from "react"
//import "./AddArticle.css"

// MaterialUi
import Button from '@material-ui/core/Button';

const AddArticle = ({ saveArticle }) => {
  const [article, setArticle] = useState()

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
     {/*  <button>Add article</button> */}
     {/* note we add type="submit" to make materialui button submit form */}
     <Button variant="contained" type="submit">Add article</Button>
    </form>
  )
}
export default AddArticle