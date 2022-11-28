import { useDispatch } from "react-redux";
/* */
import { addItem, updateItem } from "./../../store/slices/cast";

export default function PizzaItem(props) {
  const Dispatcher = useDispatch();

  let { id, name, contains, price, image, count } = props.value;

  let option = contains.split(",");

  let elements = option.map((op, index) => {
    return <li key={index}>{op}</li>;
  });

  let currency = price.split(",");

  let addToCast = () => {
    let newItem = {
      id,
      name,
      contains,
      price,
      image,
      count: ++count,
    };
    if (newItem.count === 1) {
      Dispatcher(addItem(newItem));
    } else Dispatcher(updateItem(newItem));
  };

  return (
    <div className="pizzaItem">
      <div className="pizzaItemInfo">
        <span>{name}</span>
        <ul>{elements}</ul>
      </div>
      <div className="pizzaItemPic"></div>
      <div className="pizzaItemBtn" onClick={addToCast}>
        {currency[0]}
        <span>,{currency[1]}</span>
      </div>
    </div>
  );
}
