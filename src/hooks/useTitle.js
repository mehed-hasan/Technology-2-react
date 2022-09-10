import { useEffect } from "react";

function useTitle(title) {
    
    useEffect(()=>{

        document.title = `Technology-2 || ${title}`;
        window.scrollTo(0, 0);
    },[title]);
}

export default useTitle;