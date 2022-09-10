import CaseBanner from '../../components/Casestudy/CaseBanner';
import IsotopSection from '../../components/Casestudy/IsotopSection';
import NewsLetter from '../../components/Common/NewsLetter';
import '../../css/casestudy.css';
import '../../css/isotop.css';
import useTitle from '../../hooks/useTitle';

function CaseStudy() {
    useTitle('Casestudy');

    return ( 
        <>
         <CaseBanner/>
         <IsotopSection/>
         <NewsLetter/>
        </>
     );
}

export default CaseStudy;