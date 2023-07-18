import {useState} from 'react';
import './App.css';


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
            <button className="boton" onClick={()=> onAdd(id, cantidad)}>Agregar a la bolsa</button>
            <button className="boton">Continuar Comprando</button>
            </div>
            </div>
        </>
    );
}

export default ItemCounter;
