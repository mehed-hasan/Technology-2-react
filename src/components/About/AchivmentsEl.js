function AchivementsEl({data}) {
    return ( 
        <>
        <div className="col-6 col-md-3">
        <div className="ach_elements">
         <img src={require(`../../images/about_us/${data.image}`)} alt=""/>
         <h1 className="heading_1">{data.amount} <sup> + </sup></h1>
         <p>{data.title}</p>
       </div>
       </div>
        </>
     );
}

export default AchivementsEl;