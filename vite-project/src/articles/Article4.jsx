import React from 'react'
import ArticleTemplate from './ArticleTemplate'

function Article4() {
    const articleContent = `
        <h3>1. Robert Mondavi Winery</h3>
        <p>Robert Mondavi Winery is an iconic establishment located in Napa Valley, California. Founded by Robert Mondavi in 1966, it played a pivotal role in elevating the global reputation of California wines. The winery offers visitors a blend of rich history, scenic vineyard landscapes, and a comprehensive experience of tastings and tours, showcasing the winemaking process and the estate's dedication to producing premium wines. A visit to this winery provides a deep immersion into the heart of Napa's wine culture.</p>
        <h3>2. Opus One Winery</h3>
        <p>Opus One Winery is a famed collaboration between two wine giants, Baron Philippe de Rothschild of Château Mouton Rothschild in Bordeaux and Robert Mondavi of Napa Valley. Located in Oakville, California, this winery stands as a testament to the seamless blend of Old World and New World winemaking traditions. Renowned for its luxurious and meticulously crafted wines, Opus One offers an elegant, architectural marvel of a winery, set amidst picturesque vineyards, where visitors can experience tastings of some of the world's most coveted wines.</p>
        <h3>3. Stag's Leap Wine Cellars</h3>
        <p>Stag's Leap Wine Cellars is a pivotal Napa Valley winery located in the renowned Stags Leap District. Established in 1970, it gained international acclaim when its 1973 Cabernet Sauvignon won first place in the red wine category at the historic 1976 "Judgment of Paris" tasting, besting esteemed French wines and forever changing the perception of California wines on the global stage. The winery, set against palisades' backdrop, offers a blend of impressive wines, rich history, and breathtaking vineyard views, making it an essential destination for wine aficionados and novices alike.</p>
        <h3>4. Kistler Winery</h3>
        <p>Kistler Vineyards is an esteemed boutique winery situated in Sonoma County, California. Founded in 1978 by Mark Bixler and Steve Kistler, it has garnered a stellar reputation for its exceptional single-vineyard Chardonnays and Pinot Noirs. Embracing Burgundian winemaking techniques, Kistler's wines are renowned for their elegance, depth, and balance. Visitors to the winery can expect a serene and intimate experience, diving deep into terroir-driven wines that showcase the nuances of their specific vineyard origins.</p>
        <h3>5. Chateau Montelena Winery</h3>
        <p>Chateau Montelena Winery is a historic estate nestled in the northern part of Napa Valley, California. Established in 1882, it skyrocketed to fame in 1976 when its Chardonnay won the white wine category at the "Judgment of Paris" tasting, a landmark event that elevated Napa Valley wines to international acclaim. The winery, set within a picturesque stone chateau overlooking a Chinese garden and serene Jade Lake, is renowned for producing wines of consistent quality and character, including its esteemed Cabernet Sauvignon and Chardonnay. A visit to Chateau Montelena offers a blend of rich wine history, stunning landscapes, and world-class wines.</p>
    `

    return (
        <ArticleTemplate 
            title="5 wineries you should visit in Napa Valley."
            subtitle="You will not regret."
            author="Seokmin Song"
            date="October 25th, 2023"
            imageLink="http://www.diningaround.com/assets/robet_mondavi_winery_header__joel_riddell_.jpg"
            content={articleContent}
        />
    )
}

export default Article4