import {useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const ItemCounter = ({maximo, onAdd, id}) => {
    const [cantidad, setCantidad] = useState(1)

    function add(){
        if(cantidad < maximo){
            setCantidad(cantidad + 1)
        }
    }
    function substract(){
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
        
    }
    function reset(){
        setCantidad(1)
    }

    

    return (
        <>
            <div className="counter-box">
            
            <p>cantidad: {cantidad}</p>

            <div>
                <button className="btn" onClick={substract}>-</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={add}>+</button>
            </div>
            <div>
            <button className="btn btnDetail btn-primary" onClick={()=> onAdd(id, cantidad)}>Agregar a la bolsa</button>
            <Link to="/" className="btn btnDetail btn-primary" type="button">
            Continuar Comprando
                </Link>
            </div>
            </div>
        </>
    );
}

export default ItemCounter;
