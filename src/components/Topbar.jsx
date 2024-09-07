import React, { useEffect } from 'react'
import './Topbar.css'
import { useLocation } from 'react-router-dom'

const Topbar = () => {
    const location = useLocation()
    const { pathname } = location

    return (
        <div className='topbar'>
            <div className="top-nav">
                <div className="topnav">
                    <div className="navcontainer">
                        <div className="dashboard">Inventory</div>
                        <div className="profile">
                            {/* <div className="icon">
                                <div className="nannys-shop-parent">
                                    <div className="nannys-shop">Nanny’s Shop</div>
                                    <img
                                        className="fichevron-down-icon"
                                        alt=""
                                        src="/fichevrondown.svg"
                                    />
                                </div>
                            </div> */}
                            <select className="icon" defaultValue="nannys-shop">
                                <option value="nannys-shop" className="nannys-shop">Nanny's shop</option>
                            </select>
                            <img
                                className="iconnotification"
                                alt=""
                                src="/iconlybulknotification.svg"
                            />
                            <img className="profile-icon" alt="" src="/profile-1@2x.png" />
                        </div>
                    </div>
                </div>
                <div className="breadcrumbs">
                    <div className="content">
                        <img className="iconhome" alt="" src="/iconlybulkhome.svg" />
                        <div className="page">
                            <div className="nannys-shop">/</div>
                            <div className="nannys-shop">Inventory</div>
                        </div>
                        {
                            pathname === "/add" &&
                            <div className="page">
                                <div className="nannys-shop">/</div>
                                <div className="nannys-shop">New Inventory</div>
                            </div>
                        }
                        <div className="page hide">
                            <div className="nannys-shop">/</div>
                            <div className="nannys-shop">Page</div>
                        </div>
                        <div className="page hide">
                            <div className="nannys-shop">/</div>
                            <div className="nannys-shop">Page</div>
                        </div>
                        <div className="page hide">
                            <div className="nannys-shop">/</div>
                            <div className="nannys-shop">Page</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Topbar
