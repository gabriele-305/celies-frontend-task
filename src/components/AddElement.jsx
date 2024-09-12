import PropTypes from "prop-types";
import "./AddElementCssRoot.css";
import "./AddElement.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddElement = ({ className = "" }) => {
    const location = useNavigate()
    const [checkedExp, setCheckedExp] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        // Change state to the opposite (to ture) when checkbox changes
        setChecked(!checked);
    };
    const handleChangeExp = () => {
        // Change state to the opposite (to ture) when checkbox changes
        setCheckedExp(!checkedExp);
    };



    return (
        <div className="maincontainer2">
            <div className="topcontainer">
                <div className="dashboard">New Inventory Item</div>
                <div className="buttons-container">
                    <div className="buttons-black">
                        <div className="label-container">
                            <div className="text-wrapper">Save as Draft</div>
                            <img className="line" alt="Line" src="line-1.svg" />
                            <img className="fi-chevron-down" color="white" src="fi_chevron-down.svg" />
                        </div>
                    </div>
                    <div className="buttons-blue">
                        <div className="label-container-blue">
                            <div className="save-publish">Save &amp; Publish</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="maincontainerdisplay1">
                <div className="leftcontainer">
                    <div className="leftFrame">
                        <form>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <input className="pname" decoration="filled" type="text" placeholder="Product Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <select className="pcategory" placeholder="Select Product Category">
                                            <option value="Cat1">Category 1</option>
                                            <option value="Cat2">Category 2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="sellingcost">
                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <input className="psellingprice" type="text" placeholder="Selling Price" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <input className="pcostprice" type="text" placeholder="Cost Price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <input className="pquantity" placeholder="Quantity in Stock"
                                            type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <input className="pordertype" type="text" placeholder="Order Type" />
                                    </div>
                                </div>
                            </div>

                            <div className="hiddenDiv">
                                <div className="checkbox">
                                    <div className="checkboxtxt">Discount</div>
                                    <label class="switch">
                                        <input type="checkbox" checked={checked}
                                            onChange={handleChange} />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                {checked && (
                                    <div className="sellingcosthidden">
                                        <div className="input">
                                            <div className="top">
                                                <div className="input-content">
                                                    <select className="disctype" placeholder="Type">
                                                        <option selected>Type</option>
                                                        <option value="Cat1">Sconto tipo 1</option>
                                                        <option value="Cat2">Sconto tipo 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="input">
                                            <div className="top">
                                                <div className="input-content">
                                                    <input className="discount" type="text" placeholder="value" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                }

                            </div>

                            <div className="hiddenDiv">
                                <div className="checkbox">
                                    <div className="checkboxtxt">Expiry Date</div>
                                    <label class="switch">
                                        <input type="checkbox" checked={checkedExp}
                                            onChange={handleChangeExp} />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                {checkedExp && (
                                    <div className="input">
                                        <div className="top">
                                            <div className="input-content">
                                                <input type="date" className="expiryDate" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
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

export default AddElement;