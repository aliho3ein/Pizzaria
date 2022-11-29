import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "./../../store/slices/cast";

/* */
export default function CastItem(props) {
  let { id, name, contains, price, image, count } = props.value;

  const Dispatcher = useDispatch();

  let Price = price.split(",");

  /* Actions */
  let action = (data) => {
    let thisItem = {
      id,
      name,
      contains,
      price,
      image,
      count,
    };

    if (thisItem.count <= 1 && data === "min") {
      data = "";
    }
    if (data === "delete") {
      thisItem.count = 0;
    }

    switch (data) {
      case "plus":
        thisItem.count++;
        Dispatcher(updateItem(thisItem));
        break;

      case "min":
        thisItem.count--;
        Dispatcher(updateItem(thisItem));
        break;

      /* delete */
      default:
        Dispatcher(removeItem(thisItem));
        break;
    }
  };

  return (
    <div className="caItem">
      <h2>
        <i
          className="fa fa-trash-can"
          title="Löschen"
          onClick={() => action("delete")}
        ></i>
        {name}
      </h2>
      <p>
        <i
          className="fa fa-minus"
          title="Minus"
          onClick={() => action("min")}
        ></i>
        <span>{count} x </span>
        {Price[0]}
        <span>,{Price[1]}</span>
        <i
          className="fa fa-plus"
          title="Plus"
          onClick={() => action("plus")}
        ></i>
      </p>
    </div>
  );
}
