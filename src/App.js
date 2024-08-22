import { useEffect } from "react";


function App() {

  const getUser=()=>{
    fetch("/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
  }


  useEffect(()=>{
    getUser();
  },[])


  return (
    <div className="App">
      <h1>Helloo...........</h1>
    </div>
  );
}

export default App;
