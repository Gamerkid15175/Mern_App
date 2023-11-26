import { createContext, useReducer } from 'react'

export const ThreadsContext = createContext()

export const threadsReducer = (state, action) =>
{
     switch (action.type)
     {
        case 'SET_THREADS': 
        return {threads: action.payload}

        case 'CREATE_THREAD': 
        return {threads: [action.payload, ...state.threads]}

        case 'DELETE_THREAD':
        return {threads: state.threads.filter( (t) => t._id !== action.payload._id )} 

        default:
             return state
     }
}

export const ThreadsContextProvider = ({ children }) => 
{
    const [state, dispatch] = useReducer(threadsReducer, {threads: null})


    return (
        <ThreadsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ThreadsContext.Provider>

    )
}