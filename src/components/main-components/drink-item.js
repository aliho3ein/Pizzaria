import { useDispatch, useSelector } from "react-redux";
/* */
import { addItem, updateItem } from "./../../store/slices/cast";

export default function DrinkItem(props) {
  const Dispatcher = useDispatch();

  /* Get Data from Reducer */
  let castItems = useSelector((state) => state.castReducer.items);

  let { id, name, contains, price, image, count } = props.value;

  /* Create Information List */
  let option = contains.split(",");

  let elements = option.map((op, index) => {
    return <li key={index}>{op}</li>;
  });

  /* Create Currency */
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
    <div className="drinkItem" data-aos="zoom-in" data-aos-duration="600">
      <div className="drinkItemInfo">
        <span>{name}</span>
        <ul>{elements}</ul>
      </div>
      <div
        className="drinkItemPic"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="drinkItemBtn" onClick={addToCast}>
        {currency[0]}
        <span>,{currency[1]}</span>
      </div>
    </div>
  );
}
