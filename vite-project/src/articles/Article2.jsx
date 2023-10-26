import React from 'react'
import ArticleTemplate from './ArticleTemplate'

import articles from './articlesList'

function Article2() {
    const article2 = articles[1];
    return (
        <ArticleTemplate 
            title={article2.title}
            subtitle={article2.subtitle}
            author={article2.author}
            date={article2.date}
            imageLink={article2.imageLink}
            content={article2.content}
        />
    )
}

export default Article2