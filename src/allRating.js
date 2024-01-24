import { useEffect, useState } from "react"
import axios from "axios";
import {Link} from 'react-router-dom'

function App() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      axios.get("https://localhost:7253/api/Végsőpont",{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }})
        .then((res) => setUsers(res.data))
        .catch(err => {
         setError(err.message);
    });
    }, []);
    return (
      <div className="app">
        {users.map((user) => (
            <Link key={user.nev} to={`/teacher/${user.nev}`} className="card">
                <h1>{user.nev}</h1>
                <p>{user.végsőPont1}</p>
              </Link>
          ))}
      </div>
    );
  }
  export default App;
  