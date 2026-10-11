 
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>  Textbox  </h1>

      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>You entered:</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;