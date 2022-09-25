import React from "react";
import { PropTypes } from "prop-types";

// Componente Funcional
const Result = ({value}) => 
//{
    //const {value} = props;
    //return
    (
        <div className="result">
            {value}
        </div>
    )
//}


PropTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}


export default Result