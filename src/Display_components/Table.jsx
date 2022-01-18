import React from "react";
import '../table.css';



function Table   (props)  {
    

    // const { firstName, lastName, id, fhone } = props.user;
  
    return (
        <div>
            <table>
                <tr>

                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.id}</td>
                    <td>{props.fhone}</td>
                </tr>

            </table>
        </div>
    );
}
export default Table;