
import React ,{useState} from "react";
import './../styles/App.css';

let a = [{title : "Tab" , content : 1} , {title : "Tab" , content : 2} , {title : "Tab" , content : 3} ]

const App = ()=> {
   let [count , setCount] = useState(1);

   return (
    <div>
        <ul>
            {
                a.map((e)=> (
                    <li onClick={()=>setCount(e.content)}>{e.title} {e.content}</li>
                ))
            }
        </ul>
        <p>This is the content for Tab {count}.</p>
    </div>
   )
}

export default App
