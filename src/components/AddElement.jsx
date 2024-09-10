import PropTypes from "prop-types";
import "./AddElementCssRoot.css";
import "./AddElement.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddElement = ({ className = "" }) => {
    const location = useNavigate()

    const [discount, setdiscount] = useState('');
    const [expiry, setexpiry] = useState('');

    return (
        <div className={`maincontainer1 ${className}`}>
            <div className="topcontainer">

                <div className="dashboard">New Inventory Item</div>
                <div className="buttons-container">
                    <div className="button-black" onClick={() => location("/view")}>
                        <div className="label-container-1">
                            <img className="arw-dwn-icon" alt="" src="/fi_chevron-down.svg" />
                            <div className="nannys-shop">Save as Draft</div>
                        </div>
                    </div>
                    <div className="label-container-1" onClick={() => location("/")}>
                        <div className="nannys-shop">Save & Publish</div>
                        <div className="icon-container">
                            <img className="arrwdwn-icon" alt="" src="/fiplus.svg" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="maincontainerdisplay1">
                <div className="leftcontainer">
                    <div className="leftFrame">
                        <form>
                            <input className="pname" decoration="filled" type="text" placeholder="Product Name" />
                            <select className="pcategory" placeholder="Select Product Category">
                                <option value="Cat1">Category 1</option>
                                <option value="Cat2">Category 2</option>
                            </select>
                            <input className="psellingprice" type="text" placeholder="Selling Price" />
                            <input className="pcostprice" type="text" placeholder="Cost Price" />
                            <input className="pquantity" placeholder="Quantity in Stock"
                                type="number" />
                            <input className="pordertype" type="text" placeholder="Order Type" />
                        </form>
                    </div>
                    <div className="rightFrame"></div>
                </div>
                <div className="frame">
                    <div className="product-images">
                        <div className="upload-image">
                            <div className="div">
                                <div className="iconly-bulk-image">
                                    <div className="image">
                                        <img className="combined-shape" alt="Combined shape" src="/profileImage.svg" />
                                    </div>
                                </div>
                                <div className="empty-state-content">
                                    <div className="description">
                                        <div className="div-2">
                                            <img className="fi-upload-cloud" src="/fi_upload-cloud.svg" />
                                            <div className="text-wrapper">Upload Image</div>
                                        </div>
                                        <div className="div-3">
                                            <p className="p">Upload a cover image for your product.</p>
                                            <p className="file-format-jpeg-png">
                                                <span className="span">File Format </span>
                                                <span className="text-wrapper-2">jpeg, png</span>
                                                <span className="span"> Recommened Size </span>
                                                <span className="text-wrapper-2">600x600 (1:1)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrapper-3">Additional Images</div>
                        <div className="additional-images">
                            <div className="frame-wrapper">
                                <div className="div-4">
                                    <div className="iconly-bulk-image">
                                        <div className="combined-shape-wrapper">
                                            <img className="combined-shape" alt="Combined shape" src="/profileImage.svg" />
                                        </div>
                                    </div>
                                    <div className="description-wrapper">
                                        <div className="div-wrapper">
                                            <div className="div-2">
                                                <img className="fi-upload-cloud" src="/fi_upload-cloud.svg" />
                                                <div className="text-wrapper-4">Upload Image</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-container" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

AddElement.propTypes = {
    className: PropTypes.string,
};

export default AddElement