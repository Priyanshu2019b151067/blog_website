import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>Sorry</h2>
        <p>Cannot find the page</p>
        <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;