import { Link } from "react-router-dom";

function FillBtn({link,btnText}) {
    return ( 
        <>
        <Link className="blue_btn text-center" to={link}> {btnText} </Link>
        </>
     );
}

export default FillBtn;