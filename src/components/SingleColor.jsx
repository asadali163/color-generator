import { toast } from "react-toastify";

const SingleColor = ({ color, index, half }) => {
  const { hex, weight } = color;
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (e) {
        toast.error("Failed to copied color to clipboard");
      }
    } else {
      toast.error("Clipboard access failed");
    }
  };
  return (
    <article
      className={index > half ? "color color-light" : "color"}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
