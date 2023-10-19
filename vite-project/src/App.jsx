import { useState } from 'react'
import React from 'react';
import './App.css'


function trendingArticle({ title, subtitle, author, imageLink }) {
  return (
    <div>
      <img src={imageLink} className="trending-article-image"></img>
      <h2 className="trending-article-title">{title}</h2>
      <h3 className="trending-article-subtitle">{subtitle}</h3>
      <p className="trending-article-author">by {author}</p>
    </div>
  )
}


function App() {
  const pageName = {
    home: "Home",
    about: "About",
    contact: "Contact",
    }


  return (
    <>
      <div>
        <header id="header">
          <nav>
            <a href="/home">{pageName.home}</a>
            <a href="/about">{pageName.about}</a>
            <a href="/contact">{pageName.contact}</a>
          </nav>
        </header>
          <div className="blog-header">
            <h1>WineSpace</h1>
            <h3>Hated, Jaded, Outdated</h3>
          </div>
        <body>
          <div id="home-body" className='grid-container'>
            <div id="trending-now" className="grid-item grid-item-1">
              {/* Trending now, single large article */}
              <h2 className="grid-heading">Trending Now</h2>
              {trendingArticle({
                title: "Admit it. Blogs Suck.",
                subtitle: "The many problems posed and few solutions offered by the internet's most outdated form of media",
                author: "Raphael Bajet",
                imageLink: "https://imgs.search.brave.com/AeFv6_S7bmPCM4_3fZN9ze_kDopVg2wx4OOnicKx9S4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzE5MzI1OTQ5Njgt/ZTVlNWU5ZGVlOTVh/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TVRW/OGZIWmxjblJwWTJG/c0pUSXdiR0Z1WkhO/allYQmxmR1Z1ZkRC/OGZEQjhmSHd3Jnc9/MTAwMCZxPTgw.jpeg"
              })}
            </div>
            
            <div className="grid-item grid-item-3">
              <h2>First Article Title</h2>
              <h4>First Article Subtitle</h4>
            </div>
            <div className="grid-item grid-item-4">
              <h2>Second Article Title</h2>
              <h4>Second Article Subtitle</h4>
            </div>
            <div className="grid-item grid-item-4">
              <h2>Third Article Title</h2>
              <h4>Third Article Subtitle</h4>
            </div>
            <div className="grid-item grid-item-5">
              <h2>Fourth Article Title</h2>
              <h4>Fourth Article Sule</h4>
            </div>
            <div className="grid-item grid-item-6">
              <h2>Fifth Article Title</h2>
              <h4>Fifth Article Subtitle</h4>
            </div>
            <div className="grid-item grid-item-6">
              <h2>Sixth Article Title</h2>
              <h4>Sixth Article Subtitle</h4>
            </div>
          </div>
        </body>
        
      </div>
    </>
  )
}

export default App
