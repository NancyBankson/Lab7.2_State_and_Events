import type { CharacterCounterProps } from "../../types";

export function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {

    return (
        <div>
            <p>Min: {minWords} | Max: {maxWords}</p>
            <p>Target Reading Time: {targetReadingTime}</p>
        </div>
    )
}