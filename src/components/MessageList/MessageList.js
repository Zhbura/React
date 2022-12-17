export function MessageList({ messages }) {
    return (
        <>
            <ul>
                {messages.map((msg, idx) => (
                    <li key={idx + 1}>{msg.text}</li>
                ))}
            </ul>
        </>
    )
}