import React, { useState } from 'react';

function RecentArticle({ title, subtitle, author, imageLink, date }) {
return (
    <div className="recent-article">
      <img
        src={imageLink}
        className="recent-article-image"
        alt={title}
      />
      <h2 className="modal-text">{date}</h2>
      <h2 className="recent-article-title cedarville-cursive">{title}</h2>
      <h3 className="recent-article-subtitle cedarville-cursive">{subtitle}</h3>
      <p className="recent-article-author cedarville-cursive">by {author}</p>
    </div>
  );
}

export default RecentArticle;
