import React from "react";
import Blog from "../components/blog"
import "../App.css"

const BlogList = ( {blogs} ) => {
    return(
        <div class="blog">
            {blogs.map( (blog) => {
                return <Blog blog={blog}/>
            } )}
        </div>
    )
}

export default BlogList;