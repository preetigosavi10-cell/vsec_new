
import { useNavigate } from "react-router-dom";

function Input({ setName, setEvent }) {
  const go = useNavigate();

  return (
    <div>
      <h1>College Event Registration</h1>

      Name:
      <input onChange={(e) => setName(e.target.value)} />

      <br /><br />

      Event:
      <select onChange={(e) => setEvent(e.target.value)}>
        <option>Coding</option>
        <option>Dance</option>
        <option>Singing</option>
      </select>

      <br /><br />

      <button onClick={() => go("/display")}>
        Register
      </button>
    </div>
  );
}

export default Input;
