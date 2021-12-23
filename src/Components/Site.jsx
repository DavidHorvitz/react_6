import React from "react";
import '../site.css';
import Article from "../Display_components/Article";
import Header from "../Display_components/Header";
import Footer from "../Display_components/Footer";
import Section from "../Display_components/Section";
function Site(){
    return(
        <React.Fragment>
<Header/>
<Article/>
<Section/>
<Footer/>
        </React.Fragment>
    );
}
export default Site;