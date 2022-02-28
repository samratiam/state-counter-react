import { useState } from "react";
import "./App.css"
function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>Count Number: {count} </p>

      <button onClick={() => count >= 10 ? "" : setCount(count + 1)} >Increment Counter</button>
      <button onClick={() => count <= 0 ? "" : setCount(count - 1)}>Decrement Counter</button>
      <button onClick={() => setCount(0)}>Reset Counter</button>

    </div>
  )
}

export default App;