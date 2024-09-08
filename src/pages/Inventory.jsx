import "./Inventory.css";
import Sidebar from '../components/SideBar'
import MainContainer from '../components/MainContainer'
import AddElement from '../components/AddElement'
import Topbar from "../components/TopBar";
import { Route, Routes } from "react-router-dom";

const Inventory = () => {
  return <div className="inventory">
    <Sidebar />
    <div className="inventory-container">
      <Topbar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/add" element={< AddElement/> }/>
      </Routes>
    </div>
  </div>;
};

export default Inventory;
