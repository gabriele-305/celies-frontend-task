import PropTypes from "prop-types";
import "./AddElementCssRoot.css";
import "./AddElement.css";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const AddElement = ({ className = "", product, setProduct }) => {
    const location = useNavigate()
    const [checkedExp, setCheckedExp] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedRet, setCheckedRet] = useState(false);
    const handleChange = () => {
        // Change state to the opposite (to ture) when checkbox changes
        setChecked(!checked);
    };
    const handleChangeExp = () => {
        // Change state to the opposite (to ture) when checkbox changes
        setCheckedExp(!checkedExp);
    };
    const handleChangeRet = () => {
        // Change state to the opposite (to ture) when checkbox changes
        setCheckedRet(!checkedRet);
    };
    const [imgSrc, setImgSrc] = useState();
    const [file, setFile] = useState();
    function handleChangeimg(e) {
        console.log(e.target.files);
        var div = document.getElementById("1");
        setFile(URL.createObjectURL(e.target.files[0]));
        var inpt = document.getElementById("2");
        var img1 = document.getElementById("img1");
        setImgSrc(URL.createObjectURL(e.target.files[0]));
        img1.style.display = "flex";
    }


    function MyForm() {
        const [name, setName] = useState('');
        const [cat, setCat] = useState('');
        const [psell, setPsell] = useState('');
        const [pcost, setPcost] = useState('');
        const [pquant, setPquant] = useState('');
        const [pord, setPord] = useState('');
        const [pdisc, setPdisc] = useState('');
        const [pexp, setPexp] = useState('');
        const [product, setProduct] = useState([]);

        const handleFormData = (e) => {
            e.preventDefault();

            let discount = 0;
            if (checked) discount = e.target.pdisc.value;

            let expiry = 0;
            if (checkedExp) expiry = e.target.pexp.value;

            const total = e.target.pquant.value * e.target.psell.value;

            const newProduct = {
                id: "11",
                name,
                category: cat,
                price: psell,
                stock: pquant,
                discount,
                total,
                status: "published",
                image: "",
                views: "1,200",
                favourite: "23",
                orders: "1",
                pending: "0",
                completed: "1",
                canceled: "0",
                returned: "0",
                damaged: "0",
                url: ""
            };

            setProduct([...product, newProduct]);
        };
    }


    //useExternalScripts("https://cdn.tiny.cloud/1/your-api-key/tinymce/6/tinymce.min.js");
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
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
                        <button id="btn1" type="submit" form="myform">
                            <div className="label-container-blue">
                                <div className="save-publish">Save &amp; Publish</div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
            <div className="maincontainerdisplay1">
                <div className="leftcontainer">
                    <div className="leftFrame">
                        <form id="myform">
                            <div className="labelCont">
                                <label className="label1">Product Name</label>
                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <input name="name" onChange={(e) => setName(e.target.value)} className="pname" decoration="filled" type="text" placeholder="Product Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <select name="cat" onChange={(e) => setCat(e.target.value)} className="pcategory" placeholder="Select Product Category">
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
                                            <input name="psell" onChange={(e) => setPsell(e.target.value)} className="psellingprice" type="text" placeholder="Selling Price" />
                                        </div>
                                    </div>
                                </div>

                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <input name="pcost" onChange={(e) => setPcost(e.target.value)} className="pcostprice" type="text" placeholder="Cost Price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <input name="pquant" onChange={(e) => setPquant(e.target.value)} className="pquantity" placeholder="Quantity in Stock"
                                            type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <input name="pord" onChange={(e) => setPord(e.target.value)} className="pordertype" type="text" placeholder="Order Type" />
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
                                                    <input name="pdisc" onChange={(e) => setPdisc(e.target.value)} className="discount" type="text" placeholder="value" />
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
                                                <input name="pexp" onChange={(e) => setPexp(e.target.value)} type="date" className="expiryDate" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="rightFrame">
                        <div className="input">
                            <div className="top">
                                <div className="input-content">
                                    <textarea className="shortDescr" rows="5" placeholder="Short Description" />
                                </div>
                            </div>
                        </div>
                        <div className="longDescrCont">
                            <label className="label1">Product Long Description</label>
                            <div className="input">
                                <div className="top">
                                    <div className="input-content">
                                        <ReactQuill theme="snow" className="longDescr" rows={10} placeholder="Your Text Goes Here" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hiddenDiv">
                            <div className="checkbox">
                                <div className="checkboxtxt">Return Policy</div>
                                <label class="switch">
                                    <input type="checkbox" checked={checkedRet}
                                        onChange={handleChangeRet} />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            {checkedRet && (
                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <textarea className="returnPolicy" placeholder="Insert return policy" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sellingcost">
                            <div className="labelCont">
                                <label className="label1">Date Added</label>
                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <label>{currDate}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="labelCont">
                                <label className="label1">Time Added</label>
                                <div className="input">
                                    <div className="top">
                                        <div className="input-content">
                                            <label>{currTime}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame">
                    <div className="product-images">
                        <div id='1' className="upload-image">
                            <img id="img1" src={imgSrc} />
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
                                            <div className="text-wrapper"><label><input id="2" type="file" onChange={handleChangeimg} />Upload Image</label></div>
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