import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
    
    const articlePosts = posts.map((postEl) => (
        <Article 
        key={postEl.id}
        title={postEl.title}
        date={postEl.date}
        preview={postEl.preview}
        />
    ))

return (
    <main>
        {articlePosts}
    </main>
)
}

export default ArticleList