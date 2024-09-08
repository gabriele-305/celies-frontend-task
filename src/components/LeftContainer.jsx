import PropTypes from "prop-types";
import "./AddElement.css";

const LeftContainer = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [costPrice, setCostPrice] = useState('');
    const [quantityStock, setQuantityStock] = useState('');
    const [orderType, setOrderType] = useState('');
    return (
        <div className="inputsleft">
            <form>
                <input className="pname" type="text" placeholder="Product Name" />
                <select className="pcategory" placeholder="Select Product Category" onChange={e => setProductCategory(e.target.value)}>
                    <option value="Cat1">Category 1</option>
                    <option value="Cat2">Category 2</option>
                </select>
                <input className="psellingprice" type="text" placeholder="Selling Price" />
                <input className="pcostprice" type="text" placeholder="Cost Price" />
                <input className="pquantity" placeholder="Quantity in Stock" value={quantityStock}
                    onChange={e => setQuantityStock(e.target.value)}
                    type="number" />
                <input className="pordertype" type="text" placeholder="Order Type" />
            </form>
        </div>
    )
}

export default LeftContainer