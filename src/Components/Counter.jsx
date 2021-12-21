import React, { useState, useEffect } from "react";
import Button from "../Display_components/Button";

function Counter() {
    const [count, setCount] = useState(0);
    useEffect (() =>{console.log("'re-rendered!'");});
    function countUp() {
        setCount(count + 1);
    };
    function countDown() {
        setCount(count - 1);
    };
    function countZ() {
        setCount(0);
    };
    return (
        <React.Fragment>
            <span>{count}
                <Button onClick={countUp} />
                <Button onClick={countDown} />
                <Button onClick={countZ} />
            </span>

        </React.Fragment>
    );
}
export default Counter;