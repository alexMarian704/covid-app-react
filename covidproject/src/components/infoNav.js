import { Link } from "react-router-dom"

const InfoNav = () => {

    return (
        <div id="infoNav">
            <div id="info-route">
                <Link to="/today/covid/europe"><h2>Europe</h2></Link>
            </div>
            <div id="info-route">
                <Link to="/today/covid/asia"><h2>Asia</h2></Link>
            </div>
            <div id="info-route"> 
                <Link to="/today/covid/world"><h2>World</h2></Link>
            </div>
        </div>
    )
}

export default InfoNav;