import { useEffect, useState } from "react";
import './App.css'; 

function App() {

  const [user,setUser] = useState([])

  const getUser=()=>{
    fetch("/api/user")
    .then(res => res.json())
    .then(json => setUser(json))//console.log(json))
    .catch(err => console.error("Error fetching users:", err));
  }


  useEffect(()=>{
    getUser();
  },[])


  return (
<div className="App">
      <h1 className="title">User Information</h1>
      <div className="user-container">
        {user.map((data, index) => (
          <div key={index} className="user-card">
            <h2>{data.name}</h2>
            <p><strong>Username:</strong> {data.username}</p>
            <p><strong>Email:</strong> {data.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
