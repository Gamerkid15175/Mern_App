const ThreadDetails = ({thread}) =>
{
    return(
        <div className="thread-details">
            <h4>{thread.title}</h4>
            <p><strong>line: </strong>{thread.line}</p>
            <p><strong>code: </strong>{thread.code}</p>
            <p>{thread.createdAt}</p>
        </div>
    )
}

export default ThreadDetails