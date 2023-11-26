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