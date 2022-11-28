import Bill from "./popup-bill";
import Cast from "./popup-cast";

export default function PopUp() {
  return (
    <div className="pzPopUp disNone">
      <Bill />
      <Cast />
    </div>
  );
}
