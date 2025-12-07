import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import type { TextInputProps } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function calculateWords(displayText: string): number {
  // Calculates the number of words, accounts for character count of zero
  if (displayText.length === 0) {
    return 0;
  } else {
    const words = displayText.trim().split(/\s+/);
    return words.length;
  }
}

function App() {
  const [text, setText] = useState("");

  // Instance created for TextInputProps
  const initialText: TextInputProps = {
    onTextChange: (newText: string) => setText(newText),
    initialValue: "",
    placeholder: "Start typing your content here...",
  }

  // Hours and minutes calculated for reading minutes display
  const readinTimeHours: number = Math.floor(Math.ceil(calculateWords(text) / 225) / 60);  // Words per minute used is 225
  const readingTimeMinutesNum: number = (Math.ceil(calculateWords(text) / 225)) % 60;
  let readingTimeMinutes: string = "";
  if (readingTimeMinutesNum < 10) {
    readingTimeMinutes = `0${readingTimeMinutesNum}`;
  } else readingTimeMinutes = readingTimeMinutesNum.toString();

  // Created instance for TextStats
  const textStats1 = {
    characterCount: text.length,
    wordCount: calculateWords(text),
    readingTime: `${readinTimeHours}:${readingTimeMinutes}`
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
