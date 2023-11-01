import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';
import '../App.css';
const Blog = ( { blog }) => {
    return(
        <div class="card card-container" >
            <img class="card-img-top" src={`${process.env.PUBLIC_URL}/assets/${blog.img}`} alt="Card image cap" />
            <div class="card-body">
                <span class="card-badge">{blog.cardBadge}</span>
                <h5 class="card-title">{blog.cardTitle}</h5>
                <p class="card-text text-truncate">{blog.cardText}</p>
                <Link to={`/blog/${blog.id}`} class="btn btn-primary">Read More</Link>
            </div>
        </div>
    )
}

export default Blog