import axios from 'axios';
import { useState } from 'react';

const Register = () => {
    
    // const tempUser = {
    //     username: "",
    //     age: 0,
    //     nickname: "",
    //     password: "",
    // };

    const [user,setUser] = useState([{
        username: "",
        age: 0,
        nickname: "",
        password: "",
    }]);

    const addUser = () => {

        axios.post("/api/register", user).then((res) => { console.log(res.data); });
        console.log(user);
    };

    return (
        <div className="container">
            <div className="table">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">UserName</label>
                            <input type="text" onChange={(e) => setUser({...user,username:e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Age</label>
                            <input type="text" onChange={(e) =>setUser({...user,age:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="18" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">NickName</label>
                            <input type="text" onChange={(e) => setUser({...user,nickname:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="nickname" />
                        </div>
                        <div className="mb-3">
                            <input type="password" onChange={(e) => setUser({...user,password:e.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="password" />
                        </div>
                        <div class="mb-3">
                            <button type="button" onClick={addUser} className="btn btn-primary">Submit</button>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;