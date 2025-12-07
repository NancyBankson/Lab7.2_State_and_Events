import type { StatsDisplayProps } from "../../types";

export function StatsDisplay({ stats, showReadingTime}: StatsDisplayProps) {

    return (
        <div id="container">
            <div>
                <p>Characters</p>
                <h3>{stats.characterCount}</h3>
            </div>
            <div>
                <p>Words</p>
                <h3 id="word-count">{stats.wordCount}</h3>
            </div>
            <div>
                <p>Reading Time</p>
                { (showReadingTime) ? <h3>{stats.readingTime}</h3> : null }
            </div>
        </div>
    )
}