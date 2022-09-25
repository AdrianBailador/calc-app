// importación
import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import './App.css'



// generación de la función del componente
const App = () => {  // Función flecha o Arrow Function
    
    const clickHandlerFunction = (text) => {
        console.log("Button.clickHandler", text)
    }
    
    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result value={undefined}/>        
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
       <MathOperations onClickOperation={operation => 
        console.log("Operation:", operation)
        }
        onClickEqual={equal =>
            console.log("Equal:", equal)
        }
        />
    </main>)
    }

// exportación

export default App