import React from "react";
import '../table.css';

function Table(props) {
    const { firstNmae, lastName, id, fhone } = props.user;
    return (
        <div>
            <table>
                <tr>

                    <td>{firstNmae}</td>
                    <td>{lastName}</td>
                    <td>{id}</td>
                    <td>{fhone}</td>
                </tr>

            </table>
        </div>
    );
}
export default Table;