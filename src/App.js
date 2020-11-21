import "./App.css";

import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Process from "./Components/Process";
import Products from "./Components/Products";
import Clients from "./Components/Clients";
import Companies from "./Components/Companies";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Services />

      <Process />

      <Products />

      <Clients />
      <Companies />

      <AboutUs />
    </div>
  );
}

export default App;
