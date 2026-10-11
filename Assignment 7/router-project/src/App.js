 
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";
import Input from "./input";
import Display from "./display";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Input
              setName={setName}
              setRoll={setRoll}
            />
          }
        />

        <Route
          path="/display"
          element={
            <Display
              name={name}
              roll={roll}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
