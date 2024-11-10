import './f1styles.css'


export const metadata = {
    title: "F1GPT",
    description: "The place to go for all your Formula 1 questions!"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <head>
            <title>F1GPT Logo</title>
            <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
                  rel="stylesheet"/>
        </head>
        <body>{children}</body>
        </html>
    )
}

export default RootLayout