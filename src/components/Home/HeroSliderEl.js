import OutlineBtn from "../Common/OutlineBtn";
import Particle from "../Common/Particle";


function HeroSliderEl({data}) {


  


    return (  
        <>
     <div className="hero_slider_elements">
        <div className="row">
          <div className=" col-md-12 col-lg-6">
            <div className="hero_left">
              <h1 className="heading_1">Developing <span id="typing" className="linear_text ">SaaS</span> </h1>
               <h2 className="heading_2">{data.heading2}</h2>
               <p>
                {data.details}
               </p>
               <div className="button_group">
                 <OutlineBtn btnText='Get Started' link='/#' />
                 <OutlineBtn btnText='Book a Demo' link='/#'/>
               </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
              <div className="banner_img_group">
                <img className="main_img" src={data.bannerImages} alt="" srcSet=""/>
                {
                  data.techImages.map((tech, index) =>
                  <div style={{background: `url(${require(`../../images/banner/${tech}`)})`}} key={index} className="tech"></div>
                  )
                }

                
                 
              <Particle/>


              </div>
          </div>
        </div>
      </div>
        </>
     );
}

export default HeroSliderEl;