import "./Inventory.css";
import Sidebar from '../components/SideBar'
import MainContainer from '../components/MainContainer'
import AddElement from '../components/AddElement'
import Topbar from "../components/TopBar";
import { Route, Routes } from "react-router-dom";
import ViewInventory from "../components/ViewInventory";
import { useState } from "react";
import data from "../data/inventory";

const Inventory = () => {
  const [product, setProduct] = useState(data)

  return <div className="inventory">
    <Sidebar />
    <div className="inventory-container">
      <Topbar />
      <Routes>
        <Route path="/" element={<MainContainer product={product} setProduct={setProduct} />} />
        <Route path="/add" element={< AddElement />} />
        <Route path="/view" element={<ViewInventory product={product} setProduct={setProduct} />} />
      </Routes>
    </div>
  </div>;
};

export default Inventory;
