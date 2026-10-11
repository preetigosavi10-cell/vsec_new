
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./input";
import Display from "./display";

function App() {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("Coding");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Input setName={setName} setEvent={setEvent} />}
        />

        <Route
          path="/display"
          element={<Display name={name} event={event} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
