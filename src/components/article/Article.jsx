import React from 'react';
import './article.css';


//  Functional component used to populate article content in Blog
//  Props used to retrieve image from blog
const Article = ( { imgURL, date, title }) =>{

    return(

        <div className="gkd__blog-container_article">
            
            <div className="gkd__blog-container_article-img">
                <img src={ imgURL } alt="Blog" />
            </div>

            <div className="gkd__blog-container_article-content">
                <div>
                    <p>{ date }</p>
                    <h3>{title}</h3>                
                </div>
                <p>Read full article</p>
            </div>
        </div>
    )
}


export default Article