
import React ,{useState} from "react";
import './../styles/App.css';

let a = [{title : "Tab" , content : 1} , {title : "Tab" , content : 2} , {title : "Tab" , content : 3} ]

const App = ()=> {
   let [count , setCount] = useState();

   return (
    <div>
        <ul>
            <li onClick={()=>setCount(a[0].content)}>{a[0].title} {a[0].content}</li>
            <li onClick={()=>setCount(a[1].content)}>{a[1].title} {a[1].content}</li>
            <li onClick={()=>setCount(a[2].content)}>{a[2].title} {a[2].content}</li>
        </ul>
        <p>This is the content for Tab {count}.</p>
    </div>
   )
}

export default App
