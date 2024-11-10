"use client"

import Image from "next/image"
import f1GptLogo from "./assets/f1-gpt-high-resolution-logo-transparent.png"
import {useChat} from "ai/react"
import {Message} from "ai"
import Bubble from "@/app/components/Bubble";
import LoadingBubble from "@/app/components/LoadingBubble";
import PromptSuggestionsRow from "@/app/components/PromptSuggestionsRow";

const Home = () => {
    const {append, isLoading, messages, input, handleInputChange, handleSubmit} = useChat()
    const noMessages = !messages || messages.length === 0

    const handlePrompt = (promptText) => {
        const message: Message = {
            id: crypto.randomUUID(),
            content: promptText,
            role: "user",
        }
        append(message)
    }

    return (
        <main>
            <div className="logo-container">
                <Image src={f1GptLogo} width="250" alt="F1GPT Logo"/>
            </div>
            <section className={"message-window"}>
                {noMessages ? (
                    <>
                        <p className="starter-text">
                            Welcome to F1GPT! Your expert companion for all your Formula 1 questions!
                        </p>
                        <PromptSuggestionsRow onPromptClick={handlePrompt}/>
                    </>
                ) : (
                    <>
                        {messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>)}
                        {isLoading && <LoadingBubble/>}
                    </>
                )}
            </section>
            <form onSubmit={handleSubmit}>
                <input
                    className="question-box"
                    onChange={handleInputChange}
                    value={input}
                    placeholder="Ask me something about Formula 1!"
                />
                <button type="submit" className="submit-button">Send</button>
            </form>
        </main>
    )
}

export default Home