import React from 'react'
import ArticleTemplate from './ArticleTemplate'

import articles from './articlesList'

function Article1() {
    const article1 = articles[0];
    return (
        <ArticleTemplate 
            title={article1.title}
            subtitle={article1.subtitle}
            author={article1.author}
            date={article1.date}
            imageLink={article1.imageLink}
            content={article1.content}
        />
    )
}

export default Article1