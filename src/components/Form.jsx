import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");
  const [total, setTotal] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color, total);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="color"
          id="color"
          placeholder="#3d3f83"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="100"
          step="1"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          style={{
            margin: "0 10px",
            border: "none",
            fontSize: "16px",
            textAlign: "center",
          }}
        />
        <button
          className="btn"
          type="submit"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
