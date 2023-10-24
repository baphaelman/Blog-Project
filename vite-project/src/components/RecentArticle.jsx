import React from 'react'

function RecentArticle({ title, subtitle, author, date, imageLink }) {
  return (
      <div className='recent-article'>
        <img src={imageLink} className="recent-article-image"></img>
        <h1 className="recent-article-date">{date}</h1>
        <h2 className="recent-article-title">{title}</h2>
        <h3 className="recent-article-subtitle">{subtitle}</h3>
        <p className="recent-article-author">by {author}</p>
      </div>
    )
  }

  export default RecentArticle