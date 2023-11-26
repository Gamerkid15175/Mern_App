import { useEffect, useState } from "react"

//Components
import ThreadDetails from '../components/ThreadDetails'

const Home = ()=>
{
    const [threads, setThreads] = useState(null)

    useEffect(()=>
    {
        const fetchThreads = async () =>
        {
            const response = await fetch('/api/threads')
            const json = await response.json()

            if(response.ok)
            {
                setThreads(json)
            }
        }
        fetchThreads()
    }, [])

    return (
        <div className="home">
            <div className="threads">
                {threads && threads.map((thread)=>
                (
                    <ThreadDetails key={thread._id} thread={thread}/>

                ))}
            </div>
        </div>
    )
}

export default Home