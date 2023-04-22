import logo from './logo.svg';
import './App.css';
import TeacherList from './TeacherList';
import { useState } from 'react';
function App() {
  const [x, setX] = useState(0);
  const [text, setText] = useState("React")
  const [name, setName] = useState("")
  const [student, setstudent] = useState ({name: "Nguyen Hoang Gia Bao" , old: 5,})
  const [check, setCheck] = useState (true)
  const handle_Increase = () => {
    setX((pre) => pre + 1);
    setX((pre) => pre + 1); 
  }
  const handle_ChangeText = (e) => {
    e.preventDefault();
    // setText("Reactjs" + x);
    setText(name);
    setName("");
    setstudent((pre) => ({...pre, name: name }))
  }
  const handle_ChangeName = (event) => {
    setName(event.target.value)
    
  }
  const handle_toggle_student = () =>{
    setCheck((pre) => !pre);
  }
  // console.log("reload")
  return (
    <div>
        <h1>I know nothing about Reactjs so...</h1>
        
        <h1>{x}</h1>
        <h1>Up len lan 2</h1>
        <h1>Up len lan 3</h1>
        <h1>Up len lan 4</h1>
        <h1>name: {text}</h1>
        <h1>Full Name: {student["name"]}, Tuoi: {student.old} {" "}</h1>
        <button onClick={handle_Increase}>Increase</button>
        <button onClick={handle_ChangeText}>Change</button>
        <form onSubmit={handle_ChangeText}>
          <input type="text" placeholder="Name" value={name} onChange={handle_ChangeName} />
        </form>
        <button onClick={handle_toggle_student}>Toggle Teacher</button>
        {/* <TeacherList /> */}
        {check ? <TeacherList /> : ""}
    </div>
  );
}

export default App;
