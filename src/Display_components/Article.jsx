import React from "react";
import '../article.css';
import Section1 from "./Section1";
import Section2 from "./Section2";
function Article() {
    return (
        <article>
            <Section1 />
            <Section2/>
        </article>
    );
}
export default Article;