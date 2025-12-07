import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import type { TextInputProps } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function calculateWords(displayText: string): number {
  const words = displayText.trim().split(/\s+/);
  return words.length;
}

function App() {
  const [text, setText] = useState("");

  const initialText: TextInputProps = {
    onTextChange: (newText: string) => setText(newText),
    initialValue: "",
    placeholder: "Start typing your content here...",
  }
  const textStats1 = {
    characterCount: text.length,
    wordCount: calculateWords(text),
    readingTime: Math.ceil(calculateWords(text) / 225)  // Words per minute used is 225
  }
  return (
    <>
      <TextInput
        placeholder={initialText.placeholder}
        initialValue={text}
        onTextChange={initialText.onTextChange}
      />
      <StatsDisplay
        stats={textStats1}
        showReadingTime={true}
      />
      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={50}
      />
    </>
  )
}

export default App
