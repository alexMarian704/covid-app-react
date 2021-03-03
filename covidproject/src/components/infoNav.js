import {useReducer} from "react";
import { Link } from "react-router-dom"

const InfoNav = () => {

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    function handleClick() {
      forceUpdate();
    }

    return (
        <div id="infoNav">
            <div>
                <Link to="/today/covid/europe"><h2>Europe</h2></Link>
            </div>
            <div>
                <Link to="/today/covid/asia"><h2>Asia</h2></Link>
            </div>
            <div>
                <Link to="/today/covid/world"><h2>World</h2></Link>
            </div>
        </div>
    )
}

export default InfoNav;