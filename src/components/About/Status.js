function Status({data}) {
    return ( 

        <>
                    <div className="clients">
                      <img src={require(`../../images/about_us/${data.image}`)} alt=""/> <span>{data.amount}+ </span> <span>{data.title}</span>
                  </div>
        </>
     );
}

export default Status;