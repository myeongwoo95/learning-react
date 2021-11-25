import { useReducer, useCallback } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'CHANGE':
            return{
                ...state,
                [action.name]: action.value
            }

        case 'RESET':
            return{
                username: '',
                email: ''
            }
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    
    //change
    const onChange = useCallback( e => {
        const {name, value} = e.target
        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, [])

     //reset
     const reset = useCallback( id => {
        dispatch({
            type: 'RESET'
        });
    }, [])

    return[form, onChange, reset];
}

export default useInputs;