import React, { useEffect } from 'react'
import './ViewInventory.css'
import { useLocation } from 'react-router-dom'
import data from '../data/inventory'

const ViewInventory = () => {
    const location = useLocation()
    const { id } = location.state
    const p = data.find(prod => prod.id === id)

    useEffect(() => {
        console.log(p);

    }, [])

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
                        <option value="">Edit Product</option>
                    </select>
                    <div className='action'>Unpublish Product</div>
                </div>
            </div>
            <div className="view-body">
                {id}
            </div>
        </div>
    )
}

export default ViewInventory
