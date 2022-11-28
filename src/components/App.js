import { useEffect } from "react";

/* Styles */
import "./../styles/main.css";

/* Components */
import PopUp from "./main-components/popup";
import Header from "./main-components/header";
import MainNav from "./main-components/nav";
import Content from "./main-components/content";
import Footer from "./main-components/footer";

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <PopUp />
      <Header />
      <MainNav />
      <Content />
      <Footer />
    </>
  );
}

export default App;
