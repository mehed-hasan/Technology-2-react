import { Link } from "react-router-dom";
function ServiceCard({data}) {
    return ( 

        <>
        <Link to="">
              <div className="service">
                <div className="service_overlay"></div>
               <div className="service_icon text-center"  data-aos="laying-left-spring" data-aos-duration="1500" >
                <div dangerouslySetInnerHTML={{__html:data.svg}} >

                </div>

                  
                
                 <h4 className="heading_4">{data.title}</h4>
                 <p>{data.details}</p>
                 {/* <a className="seemore" to="">See More <img className="icon" src="assets/images/icons/arrow.webp" alt=""/> </a>  */}
             </div>
            </div>
            </Link>
        </>
     );
}

export default ServiceCard;