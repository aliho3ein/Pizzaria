import { togglePopUp } from "./../Functional";

export default function Cast() {
  return (
    <div className="castArea">
      <i className="fa fa-xmark closePopUp" onClick={togglePopUp}></i>
      <div className="castItems">
        <div className="caItem">
          <h2>
            <i className="fa fa-xmark"></i>margarita
          </h2>
          <p>
            <i className="fa fa-minus"></i>
            <span>1 x </span>
            14
            <span>,59</span>
            <i className="fa fa-plus"></i>
          </p>
        </div>
        <div className="caItem">
          <h2>
            <i className="fa fa-xmark"></i>Beef
          </h2>
          <p>
            <i className="fa fa-minus"></i>
            <span>1 x </span>
            14
            <span>,59</span>
            <i className="fa fa-plus"></i>
          </p>
        </div>
        <div className="caItem">
          <h2>
            <i className="fa fa-xmark"></i>Hawaii
          </h2>
          <p>
            <i className="fa fa-minus"></i>
            <span>1 x </span>
            14
            <span>,59</span>
            <i className="fa fa-plus"></i>
          </p>
        </div>
        <div className="caItem">
          <h2>
            <i className="fa fa-xmark"></i>Casper
          </h2>
          <p>
            <i className="fa fa-minus"></i>
            <span>1 x </span>
            14
            <span>,59</span>
            <i className="fa fa-plus"></i>
          </p>
        </div>
      </div>
      <div className="castTotal">
        Total : <span>89,42</span>
      </div>
      <div className="castBuy">Bezahlen</div>
    </div>
  );
}
