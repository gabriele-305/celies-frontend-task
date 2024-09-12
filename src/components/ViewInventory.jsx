import React, { useEffect } from 'react'
import './ViewInventory.css'
import { useLocation, useNavigate } from 'react-router-dom'
import data from '../data/inventory'

const ViewInventory = () => {
    const location = useLocation()
    const navi = useNavigate()
    const { id } = location.state
    const p = data.find(prod => prod.id === id)

    const unpublish = () => { }

    return (
        <div className='view'>
            <div className="view-heading">
                <div className="heading-left">
                    <div className="head-info">
                        <div className="head-title">{p.name}</div>
                    </div>
                    <div className="head-info">
                        <div className="head-title">Date Added</div>
                        <div className="head-text">12 Sept 2022 - 12:55 pm</div>
                    </div>
                    <div className="head-info">
                        <div className="head-title">Product URL</div>
                        <div className="head-text">{p.url}</div>
                        <img className='copy-icon' src="./u_copy-alt.png" alt="" />
                    </div>
                </div>
                <div className="heading-right">
                    <select className="edit">
                        <option onClick={() => navi("/add")} value="">Edit Product</option>
                    </select>
                    <div className='action'>Unpublish Product</div>
                </div>
            </div>
            <div className="view-body">
                <div className="row1">
                    <div className="body-info row1-img">
                        <img src={p.image} alt="" />
                    </div>
                    <div className='body-info'>
                        <div className="info-up flex-between">
                            <div>Last Order <span className='info-black'>12 Sept 2022</span></div>
                            {
                                p.status === "published" ?
                                    <div className='info-pub published'>Published</div> :
                                    <div className='info-pub unpublished'>Unpublished</div>
                            }
                        </div>
                        <div className="info-down flex-between">
                            <div className='down-price'>
                                <div>Price</div>
                                <div className='price-label'>₦{p.price}</div>
                            </div>
                            <div className='down-price'>
                                <div>In-Stock</div>
                                <div className='price-label'>
                                    {
                                        p.stock === "0" ?
                                            <div className="out-of-stock2">Out of Stock</div> :
                                            p.stock
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-info">
                        <div className="info-up flex-between">
                            <img src="./icon.png" alt="" />
                            <select className="card-filter">
                                <option>All-time</option>
                            </select>
                        </div>
                        <div className="info-down">
                            <div className="down-price">
                                <div>Total Orders</div>
                                <div className="number-label">₦{p.total}</div>
                            </div>
                        </div>
                    </div>
                    <div className="body-info">
                        <div className="info-up flex-between">
                            <img src="./eye-icon.png" alt="" />
                            <select className="card-filter">
                                <option>All-time</option>
                            </select>
                        </div>
                        <div className="info-down down-numbers">
                            <div className="down-price">
                                <div>Views</div>
                                <div className="number-label">{p.views}</div>
                            </div>
                            <div className="down-price">
                                <div>Favourite</div>
                                <div className="number-label">{p.favourite}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row2'>
                    <div className="body-card">
                        <div className="info-up flex-between">
                            <img src="./bag-icon.png" alt="" />
                            <select className="card-filter">
                                <option>All-time</option>
                            </select>
                        </div>
                        <div className="info-down grid-info">
                            <div className="down-price">
                                <div>All Orders</div>
                                <div className="number-label">{p.orders}</div>
                            </div>
                            <div className="down-price">
                                <div>Pending</div>
                                <div className="number-label">{p.pending}</div>
                            </div>
                            <div className="down-price">
                                <div>Completed</div>
                                <div className="number-label">{p.completed}</div>
                            </div>
                        </div>
                    </div>
                    <div className="body-card">
                        <div className="info-up flex-between">
                            <img src="./bag-icon.png" alt="" />
                            <select className="card-filter">
                                <option>All-time</option>
                            </select>
                        </div>
                        <div className="info-down grid-info">
                            <div className="down-price">
                                <div>Canceled</div>
                                <div className="number-label">{p.canceled}</div>
                            </div>
                            <div className="down-price">
                                <div>Returned</div>
                                <div className="number-label">{p.returned}</div>
                            </div>
                            <div className="down-price">
                                <div>Damaged</div>
                                <div className="number-label">{p.damaged}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row3">
                    <div className="maincontainer1">
                        <div className="inventory-items-parent">
                            <div className="dashboard">Purchases</div>
                            <div className="left-parent">
                                <div className="left">
                                    <div className="input-content">
                                        <img
                                            className="icon-search"
                                            alt=""
                                            src="/iconlylightsearch.svg"
                                        />
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
                                    <select className="tablebuttons tablebuttons-select">
                                        <option className="nannys-shop">Bulk Action</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="tableheader-order">
                                <div className="category-parent">
                                    <input type="checkbox" className="controls" />
                                </div>
                                <div className="category-parent">
                                    <div className="nannys-shop">Order Date</div>
                                    <img
                                        className="filter-icon"
                                        alt=""
                                        src="/vuesaxoutlinesort.svg"
                                    />
                                </div>
                                <div className="category-parent">
                                    <div className="nannys-shop">Order Type</div>
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
                                    <div className="nannys-shop">Qty</div>
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
                                    <div className="nannys-shop">Order Total</div>
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
                            </div>
                            <div className="tablerow-order">
                                <div className="prod-controls">
                                    <input type="checkbox" className="controls" />
                                </div>
                                <div className="prod-name">12 Aug 2022 - 12:25 am</div>
                                <div className="prod-category">Home Delivery</div>
                                <div className="prod-price">₦25,000.00</div>
                                <div className="prod-qty">2</div>
                                <div className="prod-discount">₦0.00</div>
                                <div className="prod-total">₦50,000.00</div>
                                <div className="prod-status-container">
                                    <div className="nannys-shop prod-status published">Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewInventory
