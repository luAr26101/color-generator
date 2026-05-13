import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  console.log(color);

  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`Copied #${hex} to clipboard!`);
      } catch (err) {
        toast.error("Clipboard access not available.");
      }
    }
  }

  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
}

export default SingleColor;
