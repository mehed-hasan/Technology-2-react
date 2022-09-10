import NewsLetter from "../../components/Common/NewsLetter";
import PortfolioList from "../../components/Portfolio/PortfolioList";
import '../../css/portfolio.css';
import useTitle from "../../hooks/useTitle";

function Portfolio() {

    useTitle('Portfolio');
    return ( 
        <>
         <PortfolioList/>
         <NewsLetter/>
        </>
     );
}

export default Portfolio;