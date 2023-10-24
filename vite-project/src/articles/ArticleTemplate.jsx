import React from 'react'

function ArticleTemplate({ title, subtitle, author, date, imageLink, content }) {
    const pageName = {
        home: "Home",
        about: "About",
        contact: "Contact",
        }

    return (
        <>
            <header id="header">
            {/* <nav class="scroll-menu">
                <button class="scroll-menu-button" onClick={toggleScrollMenu()}>
                    <p>Winer</p>
                </button>
            </nav>
            */}
            <nav>
                <a href="/">{pageName.home}</a>
                <a href="/about">{pageName.about}</a>
                <a href="/contact">{pageName.contact}</a>
            </nav>
            </header>
                <div className="blog-header">
                <h1>Winer</h1>
                    <h2>Enjoying the Finest Flavor with Every Sip</h2>
                </div>
                
                <div className="article">
                    <div className="article-box">
                        <h4 className="article-author">{author}</h4>
                        <h2 className="article-title">{title}</h2>
                        <h3 className="article-subtitle">{subtitle}</h3>
                        <h4 className="article-date">{date}</h4>
                        <img className="article-image" src={imageLink}></img>
                        <div className="article-writing" dangerouslySetInnerHTML={{ __html: content }} ></div>
                    </div>
                </div>
        </>
    )
}

export default ArticleTemplate