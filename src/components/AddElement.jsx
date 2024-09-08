import PropTypes from "prop-types";
import "./AddElement.css";
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import { useLocation, useNavigate } from "react-router-dom";

const AddElement = ({ className = "" }) => {
    const location = useNavigate()

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
                    <LeftContainer />
                </div>
                <div className="rightcontainer">
                    <RightContainer />
                </div>
            </div>
        </div>
    )

}

AddElement.propTypes = {
    className: PropTypes.string,
  };

export default AddElement