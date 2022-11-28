export default function PizzaItem(props) {
  let { name, contains, price, image } = props.value;

  let option = contains.split(",");

  let elements = option.map((op, index) => {
    return <li key={index}>{op}</li>;
  });

  let currency = price.split(",");

  return (
    <div className="pizzaItem">
      <div className="pizzaItemInfo">
        <span>{name}</span>
        <ul>{elements}</ul>
      </div>
      <div className="pizzaItemPic"></div>
      <div className="pizzaItemBtn">
        {currency[0]}
        <span>,{currency[1]}</span>
      </div>
    </div>
  );
}
