import React from 'react'

import RecentArticle from './components/RecentArticle'


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

let scrollMenu = "closed";
const menuButton = document.getElementsByClassName('scroll-menu-button');
function toggleScrollMenu() {
    if (scrollMenu === "closed") {
        scrollMenu = "open";
    } else if (scrollMenu === "open") {
        scrollMenu = "closed;"
    }
    


}

const recentArticles = [
    {
        title: "2023's Best Wines",
        subtitle: "Our ranking of this year's finest reds, whites, and rosés",
        author: "Raphael Bajet",
        date: "October 17th, 2023",
        imageLink: "https://www.seriouseats.com/thmb/xnQObuVXoS4rVwmuQ0DlycZckB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sea-primary-glassware-rkilgore-980-bddd4702ec1046cb80204d37a4003cc1.jpeg"
    },
    {
        title: "Rosés are Overrated.",
        subtitle: "Deal with it.",
        author: "Raphael Bajet",
        date: "September 30th, 2023",
        imageLink: "https://imgs.search.brave.com/jVfF_zdnCJMaXVIixaxgDNkI97WXdTOBL6n8CDScdXk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjE5OTIyL3Bob3Rv/L3Jvc2Utd2luZS1h/bGZyZXNjby5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VXQw/N3J2RUxKTDVmX1Na/NXIxXzBiVS1mUm5r/WUpyOEFSNTlmQ1hw/OFNMYz0"
    },
    {
        title: "Why Wine Isn't Dying",
        subtitle: "Despite the calls from fearmongerers, wine isn't going anywhere",
        author: "Raphael Bajet",
        date: "September 3rd, 2023",
        imageLink: "https://imgs.search.brave.com/ER8mgFwE50ZAaD4M-Ya74DhQEcsqv2MZFUdI7CtUhwQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NDc4MDIxL3Bob3Rv/L3ZpbmV5YXJkcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TmNNSlhITTcta2tN/bHFDZUJRUUZRZGpP/enV3OUpHbGh3M21P/RUozUEJnOD0"
    }
]

function Home() {
      const pageName = {
        home: "Home",
        about: "About",
        contact: "Contact",
        }

    return(
        <>
        <header id="header">
          <nav>
            <a href="/">{pageName.home}</a>
            <a href="/about">{pageName.about}</a>
            <a href="/contact">{pageName.contact}</a>
          </nav>

          <nav class="scroll-menu">
            <button class="scroll-menu-bottom" onClick={toggleScrollMenu()}>
                <p>Winer</p>
            </button>
          </nav>
        </header>
          <div className="blog-header">
            <h1>Winer</h1>
            <h2>Enjoying the Finest Flavor with Every Sip</h2>
          </div>
        <body>
          <div id="home-body" className='grid-container'>
            <div id="trending-now" className="grid-item grid-item-1">
              {/* Trending now, single large article */}
              <h2 className="grid-heading">Trending Now</h2>
              {trendingArticle({
                title: "2023's Best Wines",
                subtitle: "Our ranking of this year's finest reds, whites, and rosés",
                author: "Raphael Bajet",
                imageLink: "https://www.seriouseats.com/thmb/xnQObuVXoS4rVwmuQ0DlycZckB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sea-primary-glassware-rkilgore-980-bddd4702ec1046cb80204d37a4003cc1.jpeg"
              })}
            </div>
            
            <div>
              <h2 className="grid-heading">Recent Articles</h2>
                {recentArticles.map((props, index) => (
                    <div key={index} className={`grid-item grid-item-${index}`}>
                    {RecentArticle(props)}
                    </div>
                ))}
            </div>
          </div>
        </body>
    </>
    )
}

export default Home