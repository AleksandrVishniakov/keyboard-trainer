import React, { useState } from 'react';
import './App.css';
import WordTyper from './components/word_typer/WordTyper';

function App() {
  const [word, setNewWord] = useState(generateNewWord())

  return (
    <div className="App">
      <WordTyper
        word={word}
        onError={() => {
          console.error("invalid button pressed")
        }}
        onDone={() => {
          console.log("Done!")
          const newWord = generateNewWord()
          setNewWord(newWord)
        }}
      />
    </div>
  );
}

let lastWord: string = ""
const generateNewWord = (): string => {
  const words: string[] = ['hello', 'world', 'isphera', 'infotech', 'school', 'artem', 'react', 'typescript', 'javascript', 'aaaaaaaaaaaaaaa']

  let newWord = words[Math.floor(Math.random() * words.length)]
  if (newWord === lastWord) {
    newWord = generateNewWord()
  }

  lastWord = newWord
  return newWord;
}

export default App;
