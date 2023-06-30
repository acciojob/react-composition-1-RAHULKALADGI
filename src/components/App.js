
import React ,{useState} from "react";
import './../styles/App.css';

const App = ({a}) => {
  let [change , setChange] = useState(0);
  let [name ,setName] = useState("");
  function display(e) {
    setChange(e.content);
    setName(e.title);
  }
  return (
    <div>
        <ul>
          a.map((e)=> (
            <li onClick={display(e)}>{a.title} {a.content}</li>
          ))
        </ul>
        <p>This is the content for {name} {change}.</p>
    </div>
  )
}

export default App
