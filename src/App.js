import './App.css';
import {useRef, useState} from "react";

function App() {
  const [message, setMessage] = useState()
  const [user, setUser] = useState({name:"IDK"})
  const new_user = useRef()

  const sendNewUser = () =>{
    if(user){
      fetch("http://localhost:8000/post_api",{
        method: "POST",
        body: JSON.stringify(user)
      }).then(r => console.log(r))
    }
  }
  const getUser = () =>{
    fetch("http://localhost:8000/api")
      .then(async res => await res.json())
      .then((data) =>{
        setMessage(data.name);
      });
  }

  return (
    <div className="App">
      <p>{message}</p>
      <input type="text" ref={new_user}/>
      <button onClick={getUser}>+</button>
      <button onClick={sendNewUser}>+=</button>
    </div>
  );
}

export default App;
