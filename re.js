import React,{useReducer} from "react";
const initialState = {
    count: 0,
    text: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'setText':
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

function MultipleStateComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <input
                type="text"
                value={state.text}
                onChange={(e) => dispatch({ type: 'setText', payload: e.target.value })}
            />
            <p>Text: {state.text}</p>
        </div>
    );
}
export default MultipleStateComponent