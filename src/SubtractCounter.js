
import React, {useState} from 'react'
import {connect} from 'react-redux';


function SubtractCounter(props) {

    const [counter, setCounter] = useState(0)

    const onSubtractButtonClicked = () => {
        props.onSubtract()
    }

    return (
        <div>
            <button className='sub-counter' onClick={() => onSubtractButtonClicked()}>Subtract 10</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubtract: () => dispatch({type: 'SUB_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubtractCounter);