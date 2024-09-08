import React from 'react'
import './ViewInventory.css'

const ViewInventory = () => {
    return (
        <div className='view'>
            <div className="view-heading">
                <div className="heading-left">
                    <div className="head-info">
                        <div className="head-title">Polo T-Shirt</div>
                    </div>
                    <div className="head-info">
                        <div className="head-title">Date Added</div>
                        <div className="head-text">12 Sept 2022 - 12:55 pm</div>
                    </div>
                    <div className="head-info">
                        <div className="head-title">Product URL</div>
                        <div className="head-text">1nancystores.com/polot-shirt</div>
                        <img className='copy-icon' src="./u_copy-alt.png" alt="" />
                    </div>
                </div>
                <div className="heading-right">
                    <select className="edit">
                        <option value="">Edit Product</option>
                    </select>
                    <div className='action'>Unpublish Product</div>
                </div>
            </div>
        </div>
    )
}

export default ViewInventory
