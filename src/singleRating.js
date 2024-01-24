import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Route, Link } from "react-router-dom";

function App() {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');
    const [nev, setNev] = useState('default_name');
    const [loading, isLoading] = useState(false);
    const param = useParams();
    useEffect(() => {
        isLoading(true);
      axios.get(`https://localhost:7253/api/Getter/${param.nev}`)
        .then((res) => {
            setUserData(res.data);
            setNev(res.data[0].nev);
            isLoading(false);
            })
        .catch(err => {
         setError(err.message);
    }
    );
    }, []);
    return (
        <div className="app">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div>
              <h1 className="nagynev">{nev}</h1>
              <div style={{display:'flex',flexDirection:'row', flexWrap:'wrap'}}>
              {userData.map((data) => (
                <div key={data.szempontNev} className="card">
                  <h1>{data.szempontNev}</h1>
                  <p>Pont: {data.pontertek} x {data.szorzo}</p>
                  <p>Összpontszám: {data.végsőPont}</p>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      );
      
}

export default App;
