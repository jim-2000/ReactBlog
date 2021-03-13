import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button,Container,Row,Col } from 'react-bootstrap'

//
import { setBlogData ,selectUserInput } from '../features/UserSlice'
import  '../styling/blog.css'

//>>>>>>>>
function Blogs() {
    const searchInput = useSelector(selectUserInput)
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=9031caaa6c261f84afcebdb9ce8c2756`
    const dispatch = useDispatch()
    const [blogs, setblogs] = useState();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios
        .get(blog_url)
        .then((response) =>{
            dispatch(setBlogData(response.data));
            setblogs(response.data);
            setloading(false)

        })
    })






    return (
       <Container>
            <div className="blogpage">
      
        {
            loading ? <h1 className="loading">Loading ...</h1>: ""
        }
        <div className="blogs" >
           <Row>
           {
                blogs?.articles?.map(blog => (
                   <>
            <div className="blogs">

           
                <Card style={{ width: '18rem' }} className="blog_card">
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body class="blog_body">
                        <Card.Title >{blog.title}</Card.Title>
                        <Card.Text className="blog_des">
                        {blog.description}      
                        </Card.Text>
                        <p className="text-secondary">{blog.publishedAt}</p>
                        <Button 
                        className="float-right"
                        variant="outline-info" href={blog.url}>{blog.source.name}</Button>
                    </Card.Body>
                </Card>
            </div>
                   </>
                ))
            }
           </Row>
            {
                blogs?.totalArticles === 0 && (
                    <h1 className="noblogs">No blogs Available . search some else to read gratest blogs</h1>
                ) 
            }
        </div>
        </div>
       </Container>
    )
}

export default Blogs
