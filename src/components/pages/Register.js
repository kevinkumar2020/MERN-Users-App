import axios from 'axios';

const Register = () => {

    var msg = "";
    const user = {
        username: "",
        age: 0,
        nickname: "",
        password: "",
    };

    const addUser = () => {
        axios.post("/api/register", user).then((res) => { msg = res.data; alert(msg);});
        // console.log(user);
    };

    var getData = "";
    const featchUser = () => {
        // console.log(user.username);
        axios.post("/api/searchuser",user).then((res) => { getData = res.data; console.log(getData);});
    };

    const deleteUser = () => {
        // console.log(user.username);
        axios.delete("/api/deleteuser",user).then((res) => {console.log(res.data);});
    };

    
    return (
        <div className="container">
            <div className="table">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">UserName</label>
                            <input type="text" onChange={(e) => user.username = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Age</label>
                            <input type="text" onChange={(e) => user.age = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="18" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">NickName</label>
                            <input type="text" onChange={(e) => user.nickname = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="nickname" />
                        </div>
                        <div className="mb-3">
                            <input type="password" onChange={(e) => user.password = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="password" />
                        </div>
                        <div class="mb-3">
                            <button type="button" onClick={addUser} className="btn btn-primary">Submit</button>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">{msg}</label>
                        </div>
                    </div>
                </div>
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

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Delete UserName Data</h3>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">UserName</label>
                            <input type="text" onChange={(e) => user.username = e.target.value} className="form-control" id="exampleFormControlInput1" placeholder="username" />
                        </div>
                        <div class="mb-3">
                            <button type="button" onClick={deleteUser} className="btn btn-danger">Delete User Details</button>
                        </div>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;