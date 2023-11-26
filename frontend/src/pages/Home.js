import { useEffect } from "react"
import { useThreadsContext } from '../hooks/useThreadsContext'

//Components
import ThreadDetails from '../components/ThreadDetails'
import ThreadForm from "../components/ThreadForm"

const Home = ()=>
{
    const {threads, dispatch} = useThreadsContext()

    useEffect(()=>
    {
        const fetchThreads = async () =>
        {
            const response = await fetch('/api/threads')
            const json = await response.json()

            if(response.ok)
            {
                dispatch({type: 'SET_THREADS', payload: json})
            }
        }
        fetchThreads()
    }, [dispatch])

    return (
        <div className="home">
            <div className="threads">
                {threads && threads.map((thread)=>
                (
                    <ThreadDetails key={thread._id} thread={thread}/>
                ))}
            </div>
            <ThreadForm />
        </div>
    )
}

export default Home