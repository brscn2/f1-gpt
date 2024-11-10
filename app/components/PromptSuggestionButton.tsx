const PromptSuggestionButton = ({ text, onClick }) => {
    return (
        <button className="prompt-suggestion" onClick={onClick}>
            {text}
        </button>
    )
}

export default PromptSuggestionButton;