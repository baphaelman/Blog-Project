import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
  const pageName = {
    home: "Home",
    about: "About",
    contact: "Contact",
  };

  const aboutUsSectionStyle = {
    color: 'white',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
  };

  const flexBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightpink',
    padding: '20px',
    margin: '10px 20px', 
    borderRadius: '10px',
    border: '5px solid white', 
  };

  const [showOurStory, setShowOurStory] = useState(false);
  const [showWhatWeOffer, setShowWhatWeOffer] = useState(false);

  return (
    <div style={{ margin: '20px' }}>
      <header id="header">
        <nav className="scroll-menu">
          <button className="scroll-menu-button">
            <p style={{ fontFamily: 'Cedarville Cursive' }}>Winer</p> {}
          </button>
        </nav>
        <nav>
          <Link to="/">{pageName.home}</Link>
          <Link to="/about">{pageName.about}</Link>
          <Link to="/contact">{pageName.contact}</Link>
        </nav>
      </header>
      <div className="blog-header">
        <h1 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>Winer</h1>
        <h2 style={{ fontFamily: 'Cedarville Cursive', color: 'white' }}>
          Enjoying the Finest Flavor with Every Sip
        </h2>
      </div>
      <div style={aboutUsSectionStyle}>
        <img
          src="your-image-url.jpg" // idk how to do this
          alt="About Us"
          style={{ maxWidth: '100%' }}
        />
        <div style={flexBoxStyle}>
          <h2>About Us</h2>
          <p>
          Welcome to Winer! If you love wine or want to learn more about wine, this is the place to be!
Our team at Winer is a passionate group of wine enthusiasts who want to share our love and knowledge
of the world of wine. Whether you're a seasoned wine connoisseur or just beginning your wine journey, Winer is the perfect destination for an engaging and informative learning experience.
          </p>
        </div>
        <div style={flexBoxStyle}>
          <h3 onClick={() => setShowOurStory(!showOurStory)}>Our Story</h3>
          {showOurStory && (
            <p>
              At Winer, we believe that wine is more than an occasionally enjoyed beverage; it is a journey through history, culture, and nature.
Our journey for the love of wine began with a shared fascination for the diversity of wine regions, the art of winemaking, and the joy of savoring a perfect glass of
wine. Having tasted hundreds of bottles of wine, conversed with many wine communities, and visited vineyards from all over the world, we hope to be able to share our experiences with you.
            </p>
          )}
        </div>
        <div style={flexBoxStyle}>
          <h3 onClick={() => setShowWhatWeOffer(!showWhatWeOffer)}>What We Offer</h3>
          {showWhatWeOffer && (
            <ul>
              <li>
                 We are here to provide <strong>expert insights</strong> by sharing in-depth reviews, recommendations, and wine-related 
                insights. We cover a wide range of topics, from wine rankings to the best food pairings, so you can learn and 
                enjoy wine to the fullest!
              </li>
              <li>
                Explore our <strong>trending articles</strong> and stay well-infomred with the latest news and discoveries in the world of wine. We always want to keep you up to date with the wine world. Our blog 
                keen eye on anything wine-related, and we bring you the most current and exciting wine news and developments!
              </li>
              <li>
                 We are a <strong>community</strong> of wine-lovers! Come join our discussions, share your 
                experiences, and meet with other wine enthusiasts from anywhere in the world!
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
