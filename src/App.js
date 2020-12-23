import React, {useState, useEffect} from 'react';
import Bank from "./Bank"
import Axios from "axios"
import './App.css';


function App() {
  const [result , setResult] = useState("");
  const [data ,setData] = useState([]);
  
  
  const addToBasket = () => {
    
    Axios.post('https://zimbabwebank.herokuapp.com/bank/search',{
      name:result
    }).then((response)=>{
      setData(response.data);
     
    
  })
}

  return (
<div>
  <div className="main">
  <div className="nav">
    <ul>
      <li>About</li>
      <li><a href="https://github.com/douglasmaringa">Contact me</a></li>
      <li className="right"><h3>Branch Locator</h3></li>
    </ul>

  </div>
  <div className="head">
    <h1>Zim Bank Locator</h1>
    <p>No hassle just a simple search away</p>
  </div>
<div className="below">
    <p>Type the bank you are looking for</p>
</div>
</div>
<div className="search">

  <h3>Enter A bank Name</h3>
    <input type="text"
      value={result}
      onChange={(e) => setResult(e.target.value)}/>
    <button onClick={addToBasket}>Find</button>
    
</div>
<br/>
<br/>
<div>
  {data.length>0?(<>
<div className="cardhead">
{data.map((r,i)=> (   
                <Bank name={r.name} days={r.days} location={r.location} time={r.time}/>
                )
            )
        }
</div>
 </> )
 :
 (<>
 <div className="c">
 <h1>Could not find results</h1>
 <p>make sure you actually entered the name</p>
 <p>maybe you mispelled</p>
 <p>common mispellings steward not stewart</p>
 </div>
 </>)
      }
</div>

   </div>

  )
}

export default App;
