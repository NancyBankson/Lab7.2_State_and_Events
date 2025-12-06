// import { useState } from "react";
import type { TextInputProps } from "../../types";

export function TextInput({ onTextChange, placeholder, initialValue }: TextInputProps) {
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        onTextChange(newText);
    }


    return (
        <textarea id="text-area" onChange={handleTextChange} placeholder={placeholder} required>
            {initialValue}
        </textarea>
    )
}