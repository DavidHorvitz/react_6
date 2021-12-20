import React from "react";
import Table from "../Display_components/Table";

function Users() {
    let user = [{ firstNmae: 'david', lastName: 'Horvitz', id: 3155, fhone: "0502456748" }];
    return (
        <div>
            <Table user={user[0]} />
        </div>
    );

}
export default Users;