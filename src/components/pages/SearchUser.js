import axios from "axios";

const SearchUser = () => {

    const user = {
        username: "",
        age: 0,
        nickname: "",
        password: "",
    };

    const featchUser = () => {
        axios.post("/api/searchuser", user).then((res) => {console.log(res.data); });
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
                    
                </div>
            </div>
        </div>
    );
};

export default SearchUser;