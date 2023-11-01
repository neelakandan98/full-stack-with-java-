import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react'
import Header from "../../components/header";
import Search from "../../components/search";
import BlogList from "../../components/blogList"; 
import blogList from '../../config/data'
import "../../App.css";

const Home = () =>{
    const [ blogs , setBlogs ] = useState(blogList);
    const [ searchKey , setSearchKey ] = useState('');

    const handleSearchSubmit = event =>{
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = () =>{
        const allBlogs = blogList ;
        const filterBlogs = allBlogs.filter( (blog) => {
            return  blog.cardBadge.toLowerCase().includes(searchKey.toLowerCase().trim())
        } )

        setBlogs(filterBlogs);
    }

    return (
        <div class="container">
            <Header />
            <Search 
             value={searchKey} 
             formSubmit={handleSearchSubmit} 
             handleSearchKey={ (e) => {
                setSearchKey(e.target.value)
             } } 
            />
            <BlogList blogs = {blogs} />
        </div>
    )
}

export default Home;