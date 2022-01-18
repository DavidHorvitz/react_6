import React, { useState } from "react";
import Table from "../Display_components/Table";

// function Users() {
//     let user = [
//         { firstNmae: 'david', lastName: 'Horvitz', id: 3155, fhone: "0502456748" },
//         { firstNmae: 'smulik', lastName: 'Horvitz', id: 35666, fhone: "050888348" },
//         { firstNmae: 'rivi', lastName: 'Horvitz', id: 345, fhone: "0503654444" },
//         { firstNmae: 'shari', lastName: 'Horvitz', id: 1324, fhone: "057890048" },
//         { firstNmae: 'mali', lastName: 'Horvitz', id: 94855, fhone: "0501626748" }];

function Users() {
    const [userState, setUsersState] = useState({
        user: [
            { firstName: 'david', lastName: 'Horvitz', id: 3155, fhone: "0502456748" },
            { firstName: 'smulik', lastName: 'Horvitz', id: 35666, fhone: "050888348" },
            { firstName: 'rivi', lastName: 'Horvitz', id: 345, fhone: "0503654444" },
            { firstName: 'shari', lastName: 'Horvitz', id: 1324, fhone: "057890048" },
            { firstName: 'mali', lastName: 'Horvitz', id: 94855, fhone: "0501626748" }
        ]
    });
    const swichNameHandler = () => {
        setUsersState({
            user: [
                { firstName: 'David', lastName: 'Horvitz', id: 313355, fhone: "0502456748" },
                { firstName: 'Smulik', lastName: 'Horvitz', id: 3445666, fhone: "050888348" },
                { firstName: 'Rivi', lastName: 'Horvitz', id: 345555, fhone: "0503654444" },
                { firstName: 'Shari', lastName: 'Horvitz', id: 1364324, fhone: "057890048" },
                { firstName: 'Mali', lastName: 'Horvitz', id: 94856655, fhone: "0501626748" }
            ]
        });
    }

    return (
        <div>
            <h1 onClick={swichNameHandler}>Swich Name</h1>

            <Table firstName={userState.user[0].firstName} lastName={userState.user[0].lastName}
                id={userState.user[0].id} fhone={userState.user[0].fhone} />
            <Table firstName={userState.user[1].firstName} lastName={userState.user[1].lastName}
                id={userState.user[1].id} fhone={userState.user[1].fhone} />
            <Table firstName={userState.user[2].firstName} lastName={userState.user[2].lastName}
                id={userState.user[2].id} fhone={userState.user[2].fhone} />
            <Table firstName={userState.user[3].firstName} lastName={userState.user[3].lastName}
                id={userState.user[3].id} fhone={userState.user[3].fhone} />
            <Table firstName={userState.user[4].firstName} lastName={userState.user[4].lastName}
                id={userState.user[4].id} fhone={userState.user[4].fhone} />


        </div>
    );
}
{/* <Table user/>
       <Table user={[1]} />
       <Table user={[2]} />
        <Table user={[3]} />
         <Table user={[4]} /> */}
// return (
//     <div>

//         <Table user={user[0]} />
//         <Table user={user[1]} />
//         <Table user={user[2]} />
//         <Table user={user[3]} />
//         <Table user={user[4]} />
//     </div>
// );

// }
export default Users;