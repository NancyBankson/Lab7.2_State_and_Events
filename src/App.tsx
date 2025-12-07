import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import type { TextInputProps } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function calculateWords(displayText: string): number {
  if (displayText.length === 0) {
    return 0;
  } else {
    const words = displayText.trim().split(/\s+/);
    return words.length;
  }
}

function App() {
  const [text, setText] = useState("");

  const initialText: TextInputProps = {
    onTextChange: (newText: string) => setText(newText),
    initialValue: "",
    placeholder: "Start typing your content here...",
  }
  const readinTimeHours: number = Math.floor(Math.ceil(calculateWords(text) / 225) / 60);  // Words per minute used is 225
  const readingTimeMunutesNum: number = (Math.ceil(calculateWords(text) / 225)) % 60;
  let readingTimeMunutes: string = "";
  if (readingTimeMunutesNum < 10) {
    readingTimeMunutes = `0${readingTimeMunutesNum}`;
  } else readingTimeMunutes = readingTimeMunutesNum.toString();

  const textStats1 = {
    characterCount: text.length,
    wordCount: calculateWords(text),
    readingTime: `${readinTimeHours}:${readingTimeMunutes}`
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
        maxWords={10000}
        targetReadingTime={225}
      />
    </>
  )
}

export default App
