import PropTypes from "prop-types";
import "./SideBar.css";

const SideBar = ({ className = "" }) => {
  return (
    <div className={`sidebar ${className}`}>
      <div className="up">
        <img className="logo-icon" alt="" src="/logo.svg" />
        <div className="menuitems">
          <div className="menu-item">
            <img className="menu-img2" alt="" src="/active.svg" />
          </div>
          <div className="menu-item">
            <img className="menu-img" alt="" src="/iconlylightbag.svg" />
            <div className="wrapper">
              <div className="menu-num">3</div>
            </div>
          </div>
          <div className="menu-item">
            <img className="menu-img2" alt="" src="/active1.svg" />
          </div>
          <div className="menu-item active1">
            <img
              className="menu-img"
              alt=""
              src="/iconlybulkfolder@2x.png"
            />
          </div>
          <div className="menu-item">
            <div className="wrapper">
              <div className="menu-num">16</div>
            </div>
            <img className="menu-img" alt="" src="/iconlylightchat.svg" />
          </div>
          <div className="menu-item">
            <img className="menu-img2" alt="" src="/active2.svg" />
          </div>
        </div>
      </div>
      <div className="down">
        <div className="down-container">
          <div className="logout1">
            <div className="iconlogout-wrapper">
              <img className="menu-icon" alt="" src="/fiheadphones.svg" />
            </div>
          </div>
          <div className="banner">
            <div className="container1">
              <div className="figift-wrapper">
                <img className="menu-icon" alt="" src="/figift.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="logout">
            <div className="iconlogout-wrapper">
              <img
                className="iconlogout"
                alt=""
                src="/iconlybulklogout.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
