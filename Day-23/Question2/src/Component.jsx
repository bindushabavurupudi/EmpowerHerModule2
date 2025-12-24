import { useState } from "react";

function Component(){
    const [count, setCount] = useState(0);
  const increase = ()=>{
    setCount(count+1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increase}  style={{ marginRight: "10px" }} >Increase</button>
    </div>
  )
}
export default Component;