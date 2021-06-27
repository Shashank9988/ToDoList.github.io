import { useState } from 'react';
import './FirComp.css'
function ToDoApp(props) {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const [count, countupdate] = useState(0);
    const counter =()=>{
        countupdate((oldCount)=>{
            return oldCount+1;
        })
    }
    const ItemEvent = (event) =>{
        setInputList(event.target.value);
       
    }
    const listItems =()=>{
        if(inputList==="")
        {
            alert("Enter valid value");
            return 0;
        }
        setItems((oldItems)=>{
            return [...oldItems, inputList];
        })
        counter();
      setInputList("");
        
    }
    return (
       <div className="main_div">
           <div className="second_div">
                <h2 className="h2_">
                    To Do List App
                </h2>
                <form>
                    <input className="form_" type="text" placeholder="Enter the item to add" value={inputList} onChange={ItemEvent}>
                    </input>
                    
                </form>
                <button className="btn" onClick={listItems}>
                    +
                </button>
                <h2 className="h2_second">
                    
                    Items added <h4 id="id1">{count}</h4>

                </h2>
                <ol >
                    {
                        Items.map ( (ItemVal) =>{
                            return <li className="list_">{ItemVal}</li>;
                           
                        })


                    }
                </ol>
        


               
           </div>
       </div>     
    );
}
export default ToDoApp;