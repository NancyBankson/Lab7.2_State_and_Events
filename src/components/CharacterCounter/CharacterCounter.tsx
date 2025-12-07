import type { CharacterCounterProps } from "../../types";

export function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {

    return (
        <div id="min-max">
            <p>Min: {minWords} | Max: {maxWords}</p>
            <p>Target Reading Time: {targetReadingTime} words per minute</p>
        </div>
    )
}