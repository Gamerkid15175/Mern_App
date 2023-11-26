import { useThreadsContext } from '../hooks/useThreadsContext'

const ThreadDetails = ({thread}) =>
{
    const {dispatch} = useThreadsContext()

    const handleClick = async () =>
    {
        const response = await fetch('/api/threads/' + thread._id, { method: 'DELETE'})

        const json = await response.json()

        if(response.ok)
        {
            dispatch({type: 'DELETE_THREAD', payload: json})
        }
    }

    return(
        <div className="thread-details">
            <h4>{thread.title}</h4>
            <p><strong>line: </strong>{thread.line}</p>
            <p><strong>code: </strong>{thread.code}</p>
            <p>{thread.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ThreadDetails