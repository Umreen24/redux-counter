
import React, {useState} from 'react'
import {connect} from 'react-redux';

function AddCounter(props) {

    const [counter, setCounter] = useState(0)

    const onAddButtonClicked = () => {
        props.onAdd()
    }

    return (
        <div>
            <button className='add-counter' onClick={() => onAddButtonClicked()}>Add 10</button>
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
        onAdd: () => dispatch({type: 'ADD_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter);