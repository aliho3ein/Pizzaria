export default function Footer({ scroll }) {
  return (
    <footer id="pzFooter" ref={scroll}>
      <div className="footerInfo">
        <h2>Kontakt uns</h2>
        <ul>
          <li>Berliner str. 12 , 42586 Düsseldorf</li>
          <li>+49 165 852 363</li>
          <li>info@pizza-italian.de</li>
          <li>
            Der erste deutsche pizzaria's Store eröffnete 2021 in Düsseldorf.
            Nach der Übernahme von mario Pizza 2019 und Hallo Pizza 2018 ist
            Pizzaria in Deutschland heute mit über 15 Stores ...
          </li>
        </ul>
      </div>
      <div className="footerSocial">
        <i className="fa-brands fa-square-facebook" title="FaceBook"></i>
        <i className="fa-brands fa-instagram" title="Instagram"></i>
        <i className="fa-brands fa-square-twitter" title="Twitter"></i>
        <span>copyright &copy; 2022 - aliho3ein</span>
      </div>
      <div className="footerMap">
        <h2>Vision & Mission</h2>
        <p>
          Als Weltmarktführer setzen wir auf einen Vorsprung in Qualität,
          Lieferzeit, Technologie und Spaß an unserer Arbeit. Domino’s Pizza
          wächst und lernt gemeinsam mit den Franchisenehmer:innen und
          Mitarbeiter:innen in den Zentralen und Stores weltweit. Jede:r
          Mitarbeiter:in ist ein:e Botschafter:in unserer Vision und Mission.
        </p>
      </div>
    </footer>
  );
}
