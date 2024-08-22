import { useEffect, useState } from "react";


function App() {

  const [user,setUser] = useState([])

  const getUser=()=>{
    fetch("/api/user")
    .then(res => res.json())
    .then(json => setUser(json))//console.log(json))
  }


  useEffect(()=>{
    getUser();
  },[])


  return (
    <div className="App">
      {user.map((data)=>{
        return <>
        <div>
        <h1>Name : {data.name}</h1>
        <h1>UserName : {data.username}</h1>
        <h1>Email : {data.email}</h1>
        </div>
        </>
      })}
    </div>
  );
}

export default App;
