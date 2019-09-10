
import React, {useState} from 'react'
import {connect} from 'react-redux';
import './App.css'

function DecrementCounter(props) {

    const [counter, setCounter] = useState(0)

    const onDecrementButtonClicked = () => {
        props.onDecrement()
    }

    return (
        <div>
            <button className='dec-counter' onClick={() => onDecrementButtonClicked()}>Decrement</button>
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
        onDecrement: () => dispatch({type: 'DEC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecrementCounter);