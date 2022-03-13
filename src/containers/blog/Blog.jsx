import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from '../../containers/blog/imports';


//  Functional component
//  Import template was created above to simplify image import
const Blog = () =>{

    return(

        <div className="gkd__blog section__padding">

            <div className="gkd__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
            </div>
            
            <div className="gkd__blog-container">

                <div className="gkd__blog-container_groupA" id="blog">
                    <Article imgURL={ blog01 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                
                <div className="gkd__blog-container_groupB">
                    <Article imgURL={ blog02 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={ blog03 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={ blog04 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                    <Article imgURL={ blog05 } date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )

}


export default Blog;