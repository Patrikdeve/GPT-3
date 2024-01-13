import React from 'react'
import './Blog.css'
import { Article } from '../../Components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'; 
function Blog() {
  return (
    
      <div className="gpt_blog section_padding" id='blog'>
          <div className="gpt_blog_heading">
            <h1 className='gradient_text'> 
                A lot is happening, We are blogging about it.
            </h1>
          </div>
          <div className="gpt_blog_container">
              <div className="gpt_blog_container_groupa">
                  <Article imageUrl={blog01} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
              </div>
              <div className="gpt_blog_container_groupb">
                  <Article imageUrl={blog02}  date ="Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                  <Article imageUrl={blog03} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                  <Article imageUrl={blog04} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                  <Article imageUrl={blog05} date = "Sep 26, 2021" title = "GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                  
              </div>
          </div>
      </div>
  )
}

export default Blog