import axios from "axios"
import { useEffect, useState } from "react";

const MyEndpoint = () => {
    // const [name, setName] = useState ("");
    // const [email, setEmail] = useState ("");
    // const [phone, setPhone] = useState ("");

    const [users, setUsers] = useState ([]);

    useEffect(() => {

        loadData();

    }, [])

    const loadData = async () => {
        try {
            let result = await axios.get("https://jsonplaceholder.typicode.com/users");
            // console.log (result.data);
            // setName(result.data.name);
            // setEmail(result.data.email);
            // setPhone(result.data.phone);
            // console.log(result.data);
            setUsers(result.data);
        } catch (error) {
            console.error ("Error al obtener:", error);
        }
    }

    return (
        <>
        <button onClick={loadData}>Cargar datos</button>

        {/* <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p> */}

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {users.map (user => (
                    <tr key = {user.id}>
                    <td>{user.id}</td>    
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default MyEndpoint;