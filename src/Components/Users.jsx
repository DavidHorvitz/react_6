import React from "react";
import Table from "../Display_components/Table";

function Users() {
    let user = [{ firstNmae: 'david', lastName: 'Horvitz', id: 3155, fhone: "0502456748" },
    { firstNmae: 'smulik', lastName: 'Horvitz', id: 35666, fhone: "050888348" },
    { firstNmae: 'rivi', lastName: 'Horvitz', id: 345, fhone: "0503654444" },
    { firstNmae: 'shari', lastName: 'Horvitz', id: 1324, fhone: "057890048" },
    { firstNmae: 'mali', lastName: 'Horvitz', id: 94855, fhone: "0501626748" }];
    return (
        <div>
            <Table user={user[0]} />
            <Table user={user[1]} />
            <Table user={user[2]} />
            <Table user={user[3]} />
            <Table user={user[4]} />
        </div>
    );

}
export default Users;