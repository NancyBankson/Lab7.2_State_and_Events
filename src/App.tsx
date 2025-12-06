import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import type { TextInputProps } from './types';

function App() {
  const [text, setText] = useState("");

  const initialText: TextInputProps = {
    onTextChange: (newText:string) => setText(newText),
    initialValue: "",
    placeholder: "Start typing your content here...",
  }

  return (
    <>
      <TextInput
        placeholder={initialText.placeholder}     
        initialValue={initialText.initialValue}
      onTextChange={initialText.onTextChange}
      />
    </>
  )
}

export default App
