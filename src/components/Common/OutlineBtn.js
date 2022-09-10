import { Link } from "react-router-dom";

function OutlineBtn({btnText, link}) {
    return ( 
        <Link to={link} className="border_btn">{btnText}</Link>
     );
}

export default OutlineBtn;