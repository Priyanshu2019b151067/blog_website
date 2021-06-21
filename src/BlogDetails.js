import { useParams } from "react-router";
import useFetch from "./Hook/useFetch";
import { useHistory } from "react-router";
const BlogDetail = () => {
    const {id} = useParams();
    const history = useHistory();
    const handleclick =(id)=>{
        fetch('http://localhost:8000/blogs/' + id,
        {
            method:'DELETE'
        }).then(res=>{
            console.log("deleted")
            history.push('/');
        })
    }
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
        <div className="blog-detail">
        {isPending && <div>Loading ....</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button onClick={()=>handleclick(blog.id)}>Delete it</button>
            </article>
            
        )}
        </div>
     );
}
 
export default BlogDetail;