import { useState } from "react";
import { useCart } from "../hooks/useCart";

function ShoppingList() {
    const {items, addItem, removeItem, updateQuery, total } = useCart();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleAdd() {
        if(!name || Number(price) <=0) return;

        addItem({
            name,
            price: Number(price),
            quantity
        });

        setName('');
        setPrice('');
        setQuantity(1);
    }

    return (
        <div className="container">
            <h2>Lista de Compras</h2>
            <div className="row g-2 mb-3">
                <div className="col">
                    <input
                        className="form-control"
                        placeholder="Produto"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>
                    <input
                        className="form-control"
                    >
                    </input>

                </div>
            </div>

        </div>
    )


}

export default ShoppingList;