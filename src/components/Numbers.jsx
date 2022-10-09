import React from "react";
import PropTypes from 'prop-types'
import Button from './Button'

//DRY: Don´t repeat youtself
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onClickNumber) => {
    // var number = 0
    //iterar desde el botón 1 hasta el 0, no es lineal, no van en orden
    //iterar (while, for, foreach)
    //<Button text={number.toString()} clickHandler={onClickNumber} />
    
    const renderButton = number => (
        <Button key={number}
        text={number.toString()} 
        clickHandler={onClickNumber} 
        />
    )
    return numbers.map(renderButton)
}


const Numbers = ({onClickNumber}) => (
   /* <section className="numbers">
        <Button text="1" clickHandler={onClickNumber}></Button>
        <Button text="2" clickHandler={onClickNumber}></Button>
        <Button text="3" clickHandler={onClickNumber}></Button>
        <Button text="4" clickHandler={onClickNumber}></Button>
        <Button text="5" clickHandler={onClickNumber}></Button>
        <Button text="6" clickHandler={onClickNumber}></Button>
        <Button text="7" clickHandler={onClickNumber}></Button>
        <Button text="8" clickHandler={onClickNumber}></Button>
        <Button text="9" clickHandler={onClickNumber}></Button>
        <Button text="0" clickHandler={onClickNumber}></Button> 
    </section> */
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers