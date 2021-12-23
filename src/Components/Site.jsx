import React from "react";
// import '../site.css';
import Article from "../Display_components/Article";
import Header from "../Display_components/Header";
import Footer from "../Display_components/Footer";

import Aside from "../Display_components/Aside";
function Site(){
    return(
        <React.Fragment>
<Header/>
<Aside/>
<Article/>
<Footer/>
        </React.Fragment>
    );
}
export default Site;