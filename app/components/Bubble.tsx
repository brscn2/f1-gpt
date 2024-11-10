const Bubble = ({ message }) => {
    const isUser = message.role === 'user'
    return (
        <div className={`message-bubble ${isUser ? 'user-message' : 'assistant-message'}`}>
            {message.content}
        </div>
    )
}

export default Bubble