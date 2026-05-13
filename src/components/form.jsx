import { useState } from "react";

function Form() {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {};
  return (
    <section className='container'>
      <h4>color generator</h4>
      <form action='' onSubmit={handleSubmit} className='color-form'>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
        />
        <button className='btn' style={{ backgroundColor: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;
