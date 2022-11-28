import PizzaItem from "./pizza-item";

export default function Pizza() {
  let pizzaItems = [
    {
      name: "Margarita",
      contains:
        "mit extra Mozzarella , Enthält glutenhaltiges Getreide , Enthält Weizen , enthält eine Phenylalanin - Quelle ",
      price: "8,99",
      image: "",
    },
    {
      name: "Hawaii",
      contains:
        "Teiga und Mozzarellag , mit Hähnchenbrustfilet, Ananas und Broccoli , frischen Champignons und feurigen",
      price: "12,49",
      image: "",
    },
    {
      name: "Caprese",
      contains:
        "Teiga und Mozzarellag , mit frischen Tomaten, Mozzarella Kugelng und Basilikum-Pestod",
      price: "11,49",
      image: "",
    },
    {
      name: "Tuna",
      contains:
        "mit extra Mozzarella  , mit extra viel Thunfischc , roten Zwiebeln ,Enthält glutenhaltiges Getreide",
      price: "10,99",
      image: "",
    },
    {
      name: "Triyaki Chicken",
      contains:
        "Teiga und Mozzarellag , mit frischen Champignons , Basilikum-Pestod und extra Mozzarella , Enthält Cashewkerne",
      price: "13,49",
      image: "",
    },
    {
      name: "Dutchman",
      contains:
        "Teiga und Mozzarellag , mit Prosciutto cotto , Fruchtiger Ananas und extra viel Käse.",
      price: "15,49",
      image: "",
    },
    {
      name: "Bombay",
      contains:
        "Teiga und Mozzarellag , mit Hähnchenbrustfilet, Currysaucei und Broccoli , frischen Champignons und feurigen",
      price: "8,99",
      image: "",
    },
    {
      name: "Sucuk Hollandise",
      contains:
        "Teiga und Mozzarellag , mit würziger Sucuk , roten Zwiebeln Tomaten und Sauce Hollandaiseg , gebacken Bacon ",
      price: "11,49",
      image: "",
    },
    {
      name: "Salami Supreme",
      contains:
        "mit extra Mozzarella  , leckerer Salami, mit Geschmacksverstärker,  Enthält Cashewkerne",
      price: "9,99",
      image: "",
    },
    {
      name: "Lucifer",
      contains:
        "Teiga und Mozzarellag , mit Chilisalami , frischen Champignons und feurigen , rot-grünen Jalapeños(Scharf)",
      price: "11,99",
      image: "",
    },
    {
      name: "Conchita",
      contains:
        "Teiga und Mozzarellag , mit BBQ-Sauce , Rinderhackg und Bacon, roten Zwiebeln und Mozzarella-Kugelng",
      price: "12,49",
      image: "",
    },
    {
      name: "Beef & Chicken",
      contains:
        "mit extra Mozzarella , consectetur Lorem , mit Chilisalami , frischen Champignons und feurigen ",
      price: "14,99",
      image: "",
    },
  ];

  let PizzaList = pizzaItems.map((item, index) => {
    return <PizzaItem key={index} value={item} />;
  });

  return (
    <div id="pizzaArea">
      {PizzaList}
      {/*  <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Margherita</span>
          <ul>
            <li>Lorem ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Hawaii</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Caprese</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          10<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Tuna</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Teriyaki Chicken</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          12<span>,59</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Dutchman</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          9<span>,89</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Bombay</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Sucuk Hollandaise</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Salami Supreme</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Lucifer</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Conchita</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
      </div>

      <div className="pizzaItem">
        <div className="pizzaItemInfo">
          <span>Beef & Veggies</span>
          <ul>
            <li>Lorem, ipsum dolor. consectetur</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet, adipisicing elit.</li>
          </ul>
        </div>
        <div className="pizzaItemPic"></div>
        <div className="pizzaItemBtn">
          14<span>,99</span>
        </div>
  </div>*/}
    </div>
  );
}
