import { useEffect } from "react";

/* Styles */
import "./../styles/main.css";

/* Components */
import PopUp from "./main-components/popup";
import Header from "./main-components/header";
import MainNav from "./main-components/nav";
import Content from "./main-components/content";
import Footer from "./main-components/footer";

import { useRef } from "react";

function App() {
  let toMain = useRef(null);
  let toTop = useRef(null);
  let toBottom = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <PopUp />
      <Header scroll={toTop} />
      <MainNav scroll={{ toMain, toTop, toBottom }} />
      <Content scroll={toMain} />
      <Footer scroll={toBottom} />
    </>
  );
}

export default App;
