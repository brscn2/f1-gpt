import PromptSuggestionButton from "@/app/components/PromptSuggestionButton";

const PromptSuggestionsRow = ({onPromptClick}) => {
    const prompts = [
        "Who is the highest paid F1 driver?",
        "What was the latest F1 race and who won it?",
        "Who will be the newest driver for Kick Sauber?",
        "Who is the current Formula One World Driver's Champion?"
    ]

    return (
        <div className="prompt-suggestions">
            {prompts.map((prompt, index) => (
                <PromptSuggestionButton
                    text={prompt}
                    key={`prompt-${index}`}
                    onClick={() => onPromptClick(prompt)}
                />
            ))}
        </div>
    )
}

export default PromptSuggestionsRow;