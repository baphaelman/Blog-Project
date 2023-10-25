import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom'

import RecentArticle from './components/RecentArticle'
import articles from './articles/articlesList'
import './index.css'

const lastArticle = articles.pop();

function trendingArticle({ title, subtitle, author, imageLink, date, articleLink }) { 
  return (
    <Link to={articleLink} className="trending-article-link"> 
      <div className="trending-article-div grid-item">
          <img src={imageLink} className="trending-article-image" alt={title}></img>
          <h3>{date}</h3>
          <h2 className="trending-article-title cedarville-cursive">{title}</h2>
          <h3 className="trending-article-subtitle cedarville-cursive">{subtitle}</h3>
          <p className="trending-article-author cedarville-cursive">by {author}</p>
      </div>
    </Link>
  )
}

function Home() {
      const pageName = {
        home: "Home",
        about: "About",
        contact: "Contact",
        }

    return(
      
        <>
        <header id="header">
          <nav className="scroll-menu">
            <button className="scroll-menu-button">
              <p>Winer</p>
            </button>
          </nav>
        </header>
      <body>
        <nav>
            <a href="/">{pageName.home}</a>
            <a href="/about">{pageName.about}</a>
            <a href="/contact">{pageName.contact}</a>
          </nav>
        <div className="blog-header">
          <h1 style={{ fontFamily: 'Cedarville Cursive' }}>Winer</h1>
          <h2 style={{ fontFamily: 'Cedarville Cursive' }}>Enjoying the Finest Flavor with Every Sip</h2>
        </div>
        <div id="home-body" className="grid-container">
          <div id="trending-now">
            {/* Trending now, single large article */}
            <h2 className="grid-heading cedarville-cursive">Trending Now</h2>
            {trendingArticle(lastArticle)}
            
          </div>
            
          <div>
            <h2 className="grid-heading cedarville-cursive">Recent Articles</h2>
                {articles.map((props, index) => (
                    <div key={index} className={`grid-item grid-item-${index}`}>
                      <Link to={articles[index].articleLink}>
                        {RecentArticle(props)}
                      </Link>
                    </div>
                ))}
            </div>
          </div>
        </body>
    </>
    )
}

export default Home