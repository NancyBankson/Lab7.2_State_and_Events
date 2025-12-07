import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import type { TextInputProps } from './types';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';

function App() {
  const [text, setText] = useState("");

  const initialText: TextInputProps = {
    onTextChange: (newText:string) => setText(newText),
    initialValue: "",
    placeholder: "Start typing your content here...",
  }
  const textStats1 = {
    characterCount: 5,
    wordCount: 0,
    readingTime: 23
  }
  return (
    <>
      <TextInput
        placeholder={initialText.placeholder}     
        initialValue={initialText.initialValue}
      onTextChange={initialText.onTextChange}
      />
      <StatsDisplay 
        stats={textStats1}
        showReadingTime={true}
      />
    </>
  )
}

export default App
