import { Link } from "react-router-dom";

const Nav = () => (
    <nav>
        <Link to="/"><h1>Covid App</h1></Link>
        <div id="links-container">
            <Link to="/today/covid/europe"><h1>Cases</h1></Link>
            <Link to="/about/us"><h1 id="about">About Us</h1></Link>
        </div>
    </nav>
)

export default Nav;