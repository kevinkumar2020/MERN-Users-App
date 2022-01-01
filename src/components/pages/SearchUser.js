import axios from "axios";
import { useState } from "react";

const SearchUser = () => {

    const [allUser,setAllUser]=useState([
        {
            username: "",
            age: 0,
            nickname: "",
            password: "",
        }
    ]);

    const user = {
        username: "",
        age: 0,
        nickname: "",
        password: "",
    };

    const featchUser = () => {
        axios.post("/api/searchuser",user).then((res) =>{
            console.log(res.data.data);
            setAllUser(...allUser,res.data.data);
        });
        // console.log('hello from fetch user');
        // const userArray=[
        //     {id:1,name:'abc'},
        //     {id:2,name:'xyz'},
        //     {id:3,name:'pqr'},
        // ];
        // setAllUser(userArray);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Serch UserName</h3>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">UserName</label>
                        <input type="text" onChange={(e) => user.username = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="username" />
                    </div>
                    <div class="mb-3">
                        <button type="button" onClick={featchUser} className="btn btn-info">All User Details</button>
                    </div>
                </div>
                <div className="col">
                    {allUser.map((user,index)=>{
                        return (
                            <div key={index}>
                                <h1>{user.username}</h1>
                                <h1>{user.age}</h1>
                                <h1>{user.nickname}</h1>
                                <h1>{user.password}</h1>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchUser;