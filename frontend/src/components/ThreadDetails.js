const ThreadDetails = ({thread}) =>
{
    return(
        <div className="thread-details">
            <h4>{thread.title}</h4>
            <p><stong>line: </stong>{thread.line}</p>
            <p><stong>code: </stong>{thread.code}</p>
            <p>{thread.createdAt}</p>
        </div>
    )
}

export default ThreadDetails