import React from 'react'
import './Article.css'

function Article({imageUrl,date, title}) {
  return (
    <div className="gpt_blog_container_article">
      <div className="gpt_blog_container_article_img">
        <img src={imageUrl} alt = "blog image" />
      </div>
      <div className="gpt_blog_container_article_content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article