import { useState } from "react"
import { useThreadsContext } from '../hooks/useThreadsContext'

const ThreadForm = () => 
{ 
    const {dispatch} = useThreadsContext()
    const [title,setTitle] = useState('')
    const [line,setLine] = useState('')
    const [code,setCode] = useState('')
    const [error,setError] = useState(null)

    const handleSubmit = async (e) =>
    {
        e.preventDefault()

        const thread = {title, line, code}

        const response = await fetch('/api/threads', {method: 'POST', body: JSON.stringify(thread), headers: {'Content-Type': 'application/json'}})
        const json = await response.json()

        if(!response.ok)
        {
            setError(json.error)
        }
        if(response.ok)
        {  
            setTitle('')
            setLine('')
            setCode('')
            setError(null)
            console.log('new thread added', json)
            dispatch({type: 'CREATE_THREAD', payload: json})
        }

    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Thread</h3>

            <label>Thread Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

            <label>Line:</label>
            <input type="number" onChange={(e) => setLine(e.target.value)} value={line}/>

            <label>Code:</label>
            <input type="number" onChange={(e) => setCode(e.target.value)} value={code}/>

            <button>Add Thread</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default ThreadForm