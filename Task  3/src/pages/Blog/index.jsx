import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import '../../components/header'
import Header from '../../components/header';
import blogList from '../../config/data';
import '../../App.css'

const Blog = () => {
    const {id} = useParams();
    const [blog , setBlog] = useState("");
    useEffect( () => {
        let blog = blogList.find(blog => blog.id === parseInt(id));
        
        if(blog)
        {
            setBlog(blog);
        }

    }, [])
    return(
        <div className="container">
            <Header></Header>
            {
                <div class="card card-container-fluid" >
                    <img class="card-img-top" src={`${process.env.PUBLIC_URL}/assets/${blog.img}`} alt='blog-img' />
                    <div class="card-body">
                        <span class="card-badge">{blog.cardBadge}</span>
                        <h5 class="card-title">{blog.cardTitle}</h5>
                        <p class="card-text ">{blog.cardText}</p>
                        <Link to="/" class="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Blog;