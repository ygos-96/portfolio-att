import "./assets/arq/css/reset.css";
import "./assets/arq/css/buid.css";

import "../src/assets/arq/css/App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
