import "./App.css";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
