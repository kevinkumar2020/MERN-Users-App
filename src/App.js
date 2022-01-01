import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import Register from './components/pages/Register';
import SearchUser from './components/pages/SearchUser';
import DeleteUser from './components/pages/DeleteUser';
import AllUsers from './components/pages/AllUsers';

function App() {
  return (
    <Router>
         <div className="container-fuild">
        <NavBar />
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/searchuser" element={<SearchUser/>} />
          <Route path="/deleteuser" element={<DeleteUser/>} />
          <Route path="/allusers" element={<AllUsers/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
