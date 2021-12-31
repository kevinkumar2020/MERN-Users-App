import axios from "axios";

const DeleteUser = () => {

    const user = {
        username: "",
        age: 0,
        nickname: "",
        password: "",
    };

    const deleteUser = () => {
        axios.delete("/api/deleteuser", user).then((res) => { console.log(res.data); });
    };

    return (
        <div className="container">
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
    );
};

export default DeleteUser;