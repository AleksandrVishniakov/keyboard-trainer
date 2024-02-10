import React, { useEffect, useState } from "react"
import useCounter from "../../hooks/useCounter"

interface WordTyperProps {
    word: string
    onDone: ()=>void,
    onError: ()=>void
}

const WordTyper: React.FC<WordTyperProps> = (props) => {
    const [isWordFinished, setWordFinished] = useState(false)
    const [progress, setProgress] = useState(0)
    const [chars, setChars] = useState(props.word.split(''))

    useEffect(()=> {
        setWordFinished(false)
        setProgress(0)
        setChars(props.word.split(''))
    }, [props.word])

    useEffect(() => {
        if (isWordFinished) {
            props.onDone()
            document.onkeydown = () => { }
        } else {

            document.onkeydown = (evt) => {

                const keyCode = "Key" + chars[progress].toUpperCase()

                if (evt.code == keyCode && !isWordFinished) {
                    setProgress(progress+1)

                    if (progress === chars.length-1) {
                        setWordFinished(true)
                    }
                } else {
                    props.onError()
                }
            }
        }
    }, [progress, isWordFinished])

    return (
        <h1>
            {
                chars.map((char, i) => {
                    if (i < progress) {
                        return <span key={i} style={{ color: " #44944A" }}>{char}</span>
                    } else {
                        return <span key={i} style={{ color: "#FFDB58" }}>{char}</span>
                    }
                })
            }
        </h1>
    )
}

export default WordTyper