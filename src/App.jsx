// importación
import React, { useState } from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import './App.css'



// generación de la función del componente
const App = () => {  // Función flecha o Arrow Function
   
    const arrayTextoFuncionModificaTexto = useState("")

    // arrayTextoFuncionModificaTexto => ["hola", funcion]
    
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    const texto = arrayTextoFuncionModificaTexto[0]

    // 2da posición: funcion que me va a permitir modificar el valor por defecto
    const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]



    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result value={texto}/>        
            <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            funcionModificaTexto(number)
        }} />
       <Functions 
            onContentClear={() => 
                console.log("Content Clear")
            }
            onDelete={()=>
                console.log("onDelete")   
            }
       
       /> 
       <MathOperations 
            onClickOperation={operation => 
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