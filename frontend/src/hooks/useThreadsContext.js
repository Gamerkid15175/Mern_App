import { ThreadsContext } from "../context/threadcontext";
import { useContext } from "react";

export const useThreadsContext = () => 
{
    const context = useContext(ThreadsContext)

    if(!context)
    {
        throw Error('useThreadContext must be used inside an ThreadsContextProvider')
    }

    return context
}