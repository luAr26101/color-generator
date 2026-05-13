import SingleColor from "./single-color";
import { nanoid } from "nanoid";

function ColorList({ colors }) {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}

export default ColorList;
