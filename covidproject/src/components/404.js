import { Link } from "react-router-dom";

const Page404 = ()=>(
    <div id="pagerror">
        <h2 id="notFound">404</h2>
        <h2 id="notFound">Page not found</h2>
        <Link to="/"><p id="backMain">Back to main page</p></Link>
    </div>
)

export default Page404;