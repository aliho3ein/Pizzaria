import { useDispatch, useSelector } from "react-redux";
/* */
import { addItem, updateItem } from "./../../store/slices/cast";

export default function PizzaItem(props) {
  const Dispatcher = useDispatch();

  let castItems = useSelector((state) => state.castReducer.items);

  let { id, name, contains, price, image, count } = props.value;

  let option = contains.split(",");

  let elements = option.map((op, index) => {
    return <li key={index}>{op}</li>;
  });

  let currency = price.split(",");

  let addToCast = () => {
    let exist = castItems.find((el) => el.id === id);

    let newItem = {
      id,
      name,
      contains,
      price,
      image,
      count,
    };

    if (!exist) {
      newItem.count = 1;
      Dispatcher(addItem(newItem));
    } else {
      newItem.count = exist.count + 1;
      Dispatcher(updateItem(newItem));
    }
  };

  return (
    <div className="pizzaItem">
      <div className="pizzaItemInfo">
        <span>{name}</span>
        <ul>{elements}</ul>
      </div>
      <div
        className="pizzaItemPic"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="pizzaItemBtn" onClick={addToCast}>
        {currency[0]}
        <span>,{currency[1]}</span>
      </div>
    </div>
  );
}
