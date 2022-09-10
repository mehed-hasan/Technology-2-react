import ContactForm from "../../components/Contact/ContactForm";
import '../../css/contact.css';
import useTitle from "../../hooks/useTitle";

function Contact() {

    useTitle('Contact');
    return ( 

        <>
               <div className="top_page_gap"></div>

                <ContactForm/>

                <div className="gap"></div>

        </>
     );
}

export default Contact;