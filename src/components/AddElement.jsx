import PropTypes from "prop-types";
import "./AddElement.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddElement = ({ className = "" }) => {
    const location = useNavigate()

    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [quantityStock, setQuantityStock] = useState('');
    const [orderType, setOrderType] = useState('');

    return (
        <div className={`maincontainer1 ${className}`}>
            <div className="topcontainer">
                <div className="heading">
                    <div className="dashboard">New Inventory Item</div>
                    <div className="buttons">
                        <div className="label-container" onClick={() => location("/view")}>
                            <img className="plus-icon" alt="" src="/fiplus.svg" />
                            <div className="nannys-shop">Save & Publish</div>
                        </div>
                        <div className="label-container" onClick={() => location("/")}>
                            <div className="nannys-shop">Save as Draft</div>
                            <div className="icon-container">
                                <img className="arrwdwn-icon" alt="" src="/fiplus.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maincontainerdisplay1">
                <div className="leftcontainer">
                    <div className="inputsleft">
                        <form>
                            <input className="pname" type="text" placeholder="Product Name" />
                            <select className="pcategory" placeholder="Select Product Category" onChange={e => setProductCategory(e.target.value)}>
                                <option value="Cat1">Category 1</option>
                                <option value="Cat2">Category 2</option>
                            </select>
                            <input className="psellingprice" type="text" placeholder="Selling Price" />
                            <input className="pcostprice" type="text" placeholder="Cost Price" />
                            <input className="pquantity" placeholder="Quantity in Stock" value={quantityStock}
                                onChange={e => setQuantityStock(e.target.value)}
                                type="number" />
                            <input className="pordertype" type="text" placeholder="Order Type" />
                        </form>
                    </div>
                </div>
                <div className="rightcontainer">

                </div>
            </div>
        </div>
    )

}

AddElement.propTypes = {
    className: PropTypes.string,
};

export default AddElement