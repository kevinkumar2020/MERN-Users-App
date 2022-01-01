import axios from "axios";
import { useEffect, useState } from "react";
const AllUsers = () => {

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = () => {
        axios.get("/api/").then((res) => setUser(res.data.data));
    };

    
    const [user,setUser] = useState([]);

    return(
        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">UserName</th>
                                <th scope="col">Age</th>
                                <th scope="col">NickName</th>
                                </tr>
                            </thead>
                        {
                            user.map((item,index) => {
                                return(
                                    <tbody>
                                        <tr key={index}>
                                        <th scope="row">{item.username}</th>
                                        <td>{item.age}</td>
                                        <td>{item.nickname}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
            </table>
    );
};

export default AllUsers;