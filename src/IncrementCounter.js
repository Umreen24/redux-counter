
import React, {useState} from 'react'
import {connect} from 'react-redux';

function IncrementCounter(props) {
    const [counter, setCounter] = useState(0)

    const onIncrementButtonClicked = () => {
        props.onIncrement()
    }

    return (
        <div>
            <div className='counter'>
            {props.ctr}
            </div>
            <button className='inc-counter' onClick={() => onIncrementButtonClicked()}>Increment</button>
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
        onIncrement: () => dispatch({type: 'INC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementCounter);