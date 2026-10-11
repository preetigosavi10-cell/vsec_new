 
import { useNavigate } from "react-router-dom";

function Input({ setName, setRoll }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Student Registration</h1>

      <input
        type="text"
        placeholder="Enter Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Roll Number"
        onChange={(e) => setRoll(e.target.value)}
      />

      <br /><br />

      <button onClick={() => navigate("/display")}>
        View Details
      </button>
    </div>
  );
}

export default Input;
