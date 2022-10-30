// importación
import React, { useState } from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import './App.css'



// generación de la función del componente
const App = () => {  // Función flecha o Arrow Function
   
    // Array Destructuring
    //const arrayTextoFuncionModificaTexto = useState("")
    // stack, variable que va a acumular lo que vamos escribiendo

    const [stack, setStack] = useState("")

    // arrayTextoFuncionModificaTexto => ["hola", funcion]    
    // 1er posicion: valor (que inicialmente es el valor por defecto)
    //const texto = arrayTextoFuncionModificaTexto[0]
    // 2da posición: funcion que me va a permitir modificar el valor por defecto
    //const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
        <main className='react-calculator'>
            <Result value={stack}/>        
            <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`)
        }} />
       <Functions 
            onContentClear={() => {
                console.log("Content Clear")
                setStack('')}
            }
            onDelete={()=>{
                if(stack.length > 0){
                    console.log("onDelete")
                    const newStack = stack.substring(0, stack.length-1)
                    setStack(newStack)   
            }
        }}
       
       /> 
       <MathOperations 
            onClickOperation={operation => {
            console.log("Operation:", operation)
            setStack(`${stack}${operation}`)
        }}
            onClickEqual={equal =>{
            console.log("Equal:", equal)
            setStack(eval(stack).toString())
        }}
        />
    </main>)
    }

// exportación

export default App