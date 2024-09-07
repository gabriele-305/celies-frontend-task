import PropTypes from "prop-types";
import "./MainContainer.css";
import { useLocation, useNavigate } from "react-router-dom";

const MainContainer = ({ className = "" }) => {
  const location = useNavigate()

  return (
    <div className={`maincontainer ${className}`}>
      <div className="container2">
        <div className="heading">
          <div className="dashboard">Inventory Summary</div>
          <div className="buttons">
            <div className="label-container" onClick={() => location("/add")}>
              <img className="plus-icon" alt="" src="/fiplus.svg" />
              <div className="nannys-shop">Add a New Product</div>
            </div>
          </div>
        </div>
        <div className="summaryrow">
          <div className="card-left">
            <div className="summarycontainer">
              <div className="navcontainer">
                <img className="card-icon" alt="" src="/icon.svg" />
                {/* <div className="filter">
                  <div className="nannys-shop">This Week</div>
                  <img className="fifilter-icon" alt="" src />
                </div> */}
              </div>
              <div className="frame-parent">
                <div className="customers-parent">
                  <div className="nannys-shop">All Products</div>
                  <div className="parent">
                    <div className="dashboard">350</div>
                    {/* <div className="div7">+0.00%</div> */}
                  </div>
                </div>
                <div className="customers-parent">
                  <div className="nannys-shop">Active</div>
                  <div className="parent">
                    <div className="dashboard">316</div>
                    <div className="dashboard-perc">86%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-right">
            <div className="summarycontainer">
              <div className="navcontainer">
                <img className="card-icon" alt="" src="/icon1.svg" />
                <select className="card-filter">
                  <option selected>This Week</option>
                </select>
                {/* <div className="filter1">
                  <div className="nannys-shop">This Week</div>
                  <img
                    className="fifilter-icon"
                    alt=""
                    src="/fichevrondown2.svg"
                  />
                </div> */}
              </div>
              <div className="frame-group">
                <div className="customers-parent">
                  <div className="nannys-shop dashboard-red">Low Stock Alert</div>
                  <div className="frame-div">
                    <div className="dashboard">23</div>
                    {/* <div className="div11">+15.80%</div> */}
                  </div>
                </div>
                <div className="customers-parent">
                  <div className="nannys-shop">Expired</div>
                  <div className="frame-div">
                    <div className="dashboard">3</div>
                    {/* <div className="div11">+85%</div> */}
                  </div>
                </div>
                <div className="customers-parent">
                  <div className="nannys-shop">1 Start Rating</div>
                  <div className="frame-div">
                    <div className="dashboard">2</div>
                    {/* <div className="div15">-10%</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontainer-wrapper">
          <div className="maincontainer1">
            <div className="inventory-items-parent">
              <div className="dashboard">Inventory Items</div>
              <div className="left-parent">
                <div className="left">
                  <div className="input-content">
                    <img
                      className="icon-search"
                      alt=""
                      src="/iconlylightsearch.svg"
                    />
                    {/* <div className="input-content1">
                      <div className="search">Search</div>
                    </div> */}
                    <input type="text" placeholder="Search" className="input-content1" />
                  </div>
                </div>
                <div className="right">
                  <div className="tablebuttons">
                    <div className="label-container1">
                      <img
                        className="filter-icon"
                        alt=""
                        src="/fifilter.svg"
                      />
                      <div className="nannys-shop">Filter</div>
                    </div>
                  </div>
                  <div className="tablebuttons">
                    <div className="label-container1">
                      <img
                        className="filter-icon"
                        alt=""
                        src="/iconlylightcalendar.svg"
                      />
                      <div className="nannys-shop">Filter</div>
                    </div>
                  </div>
                  <div className="tablebuttons">
                    <div className="label-container1">
                      <img
                        className="filter-icon"
                        alt=""
                        src="/iconlylightsend.svg"
                      />
                      <div className="nannys-shop">Share</div>
                    </div>
                  </div>
                  {/* <div className="tablebuttons">
                    <div className="label-container1">
                      <div className="nannys-shop">Bulk Action</div>
                      <img
                        className="fifilter-icon"
                        alt=""
                        src="/fichevrondown3.svg"
                      />
                    </div>
                  </div> */}
                  <select className="tablebuttons tablebuttons-select">
                    {/* <div className="label-container1"> */}
                    <option className="nannys-shop">Bulk Action</option>
                    {/* <img
                        className="fifilter-icon"
                        alt=""
                        src="/fichevrondown3.svg"
                      /> */}
                    {/* </div> */}
                  </select>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="tableheader">
                {/* <div className="controls-parent"> */}
                <div className="category-parent">
                  <input type="checkbox" className="controls" />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Product Name</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Category</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Unit Price</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">In-Stock</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Discount</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Total Value</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Action</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                <div className="category-parent">
                  <div className="nannys-shop">Status</div>
                  <img
                    className="filter-icon"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div>
                {/* </div> */}
                {/* <div className="category-parent">
                  <div className="nannys-shop">Category</div>
                  <img
                    className="iconlybulkhome"
                    alt=""
                    src="/vuesaxoutlinesort.svg"
                  />
                </div> */}
              </div>
              {/* <div className="tablerowcontainer"> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls">
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <div className="prod-name">iPhone 13 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦1,225,000.00</div>
                <div className="prod-qty">8</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className="prod-name">iPhone 12 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦725,000.00</div>
                <div className="prod-qty">12</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              <div className="tablerow">
                {/* <div className="colcontents2"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className="prod-name">Polo T-Shirt</div>
                <div className="prod-category">Fashion</div>
                <div className="prod-price">₦125,000.00</div>
                <div className="prod-qty">120</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Unpublish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status unpublished">Unpublished</div>
                </div>
                {/* </div> */}
              </div>
              <div className="tablerow">
                {/* <div className="colcontents2"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className="prod-name">Polo T-Shirt</div>
                <div className="prod-category">Fashion</div>
                <div className="prod-price">₦125,000.00</div>
                <div className="prod-qty"><div className="out-of-stock">Out of Stock</div></div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Unpublish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status unpublished">Unpublished</div>
                </div>
                {/* </div> */}
              </div>
              <div className="tablerow">
                {/* <div className="colcontents2"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className="prod-name">Polo T-Shirt</div>
                <div className="prod-category">Fashion</div>
                <div className="prod-price">₦125,000.00</div>
                <div className="prod-qty"><div className="out-of-stock">Out of Stock</div></div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Unpublish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status unpublished">Unpublished</div>
                </div>
                {/* </div> */}
              </div>
              {/* <div className="tablerowcontainer"> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <div className="prod-name">iPhone 13 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦1,225,000.00</div>
                <div className="prod-qty">8</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className="prod-name">iPhone 12 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦725,000.00</div>
                <div className="prod-qty">12</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              {/* <div className="tablerowcontainer"> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <div className="prod-name">iPhone 13 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦1,225,000.00</div>
                <div className="prod-qty">8</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              {/* </div> */}
              <div className="tablerow">
                {/* <div className="colcontents"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className="prod-name">iPhone 12 Pro</div>
                <div className="prod-category">Gadgets</div>
                <div className="prod-price">₦725,000.00</div>
                <div className="prod-qty">12</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Publish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status published">Published</div>
                </div>
                {/* </div> */}
              </div>
              <div className="tablerow">
                {/* <div className="colcontents2"> */}
                <div className="prod-controls" >
                  <input type="checkbox" className="controls" />
                </div>
                <img
                  className="prod-img"
                  alt=""
                  src="/rectangle-32@2x.png"
                />
                <div className="prod-name">Polo T-Shirt</div>
                <div className="prod-category">Fashion</div>
                <div className="prod-price">₦125,000.00</div>
                <div className="prod-qty">120</div>
                <div className="prod-discount">₦0.00</div>
                <div className="prod-total">₦50,000.00</div>
                <div className="prod-tool">
                  <select className="publish-parent">
                    <option className="nannys-shop">Unpublish</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                </div>
                <div className="prod-status-container">
                  <div className="nannys-shop prod-status unpublished">Unpublished</div>
                </div>
                {/* </div> */}
              </div>
              <div className="tableheader1">
                <div className="footer-first">
                  {/* <div className="icon14"> */}
                  <select className="footer-control">
                    <option className="nannys-shop">10</option>
                    {/* <img
                      className="fifilter-icon"
                      alt=""
                      src="/fichevrondown4.svg"
                    /> */}
                  </select>
                  {/* </div> */}
                  <div className="out-of-stock">Items per page</div>
                  <div className="bottom-num">1-10 of 200 items</div>
                </div>
                <div className="footer-second">
                  <div className="icon-parent">
                    {/* <div className="icon13"> */}
                    <select className="footer-control">
                      <option className="nannys-shop">1</option>
                      {/* <img
                        className="fifilter-icon"
                        alt=""
                        src="/fichevrondown4.svg"
                      /> */}
                    </select>
                    {/* </div> */}
                    <div className="bottom-num">of 44 pages</div>
                  </div>
                  <div className="actions-arrow-down-parent">
                    <img
                      className="actions-arrow-down"
                      alt=""
                      src="/actions--arrowdown@2x.png"
                    />
                    <img
                      className="actions-arrow-down"
                      alt=""
                      src="/actions--arrowdown1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainContainer.propTypes = {
  className: PropTypes.string,
};

export default MainContainer;
