import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "./../../store/slices/cast";

/* */
export default function CastItem(props) {
  let { id, name, contains, price, image, count } = props.value;

  const Dispatcher = useDispatch();

  let Price = price.split(",");

  /* Actions */
  let action = (data) => {
    let plus = {
      id,
      name,
      contains,
      price,
      image,
      count,
    };

    if (plus.count <= 1 && data === "min") {
      data = "";
    }

    switch (data) {
      case "plus":
        plus.count++;
        Dispatcher(updateItem(plus));
        break;

      case "min":
        plus.count--;
        Dispatcher(updateItem(plus));
        break;

      default:
        Dispatcher(removeItem(id));
        break;
    }
  };

  return (
    <div className="caItem">
      <h2>
        <i className="fa fa-xmark" onClick={action}></i>
        {name}
      </h2>
      <p>
        <i className="fa fa-minus" onClick={() => action("min")}></i>
        <span>{count} x </span>
        {Price[0]}
        <span>,{Price[1]}</span>
        <i className="fa fa-plus" onClick={() => action("plus")}></i>
      </p>
    </div>
  );
}
