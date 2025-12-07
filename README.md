# Lab 7.1 State and events

## Overview

In this lab we created an interactive character and word counter in React.  The purpose of this assignment was to practice using the useState hook in React as well as event handling and component interaction.

## Features

Activity Tasks

1. Component Implementation:

- Implement each component according to its interface requirements.
- Use useState to manage text input and statistics.
- Implement event handlers for text changes.
- Calculate statistics in real-time.

2. State Management:

- Track the current text input.
- Calculate and update statistics when text changes.
- Handle edge cases (empty input, very long text).

3. User Interface:

- Create a responsive layout.
- Show visual feedback for statistics.
- Implement progress indicators for word count goals.

4. Component Communication:

- Use callbacks to pass data between components.
- Ensure proper prop typing.
- Handle optional props appropriately.

## Tools

- HTML
- CSS
- JavaScript
- TypeScript
- React
- Vite

## Reflection Questions

1. How did you handle state updates when the text changed?

In the App function in the App.tsx file, I added the useState hook.  On change, the setter function applied the changes to the text.

2. What considerations did you make when calculating reading time?

To calculate reading time, I divided the word count by 225.  In order to display the reading time into a 0:00 format, I calculated the hours by dividing by 60 and using Math.floor.  Then, I calculated the minutes by finding the remainder after dividing by 60.

3. How did you ensure the UI remained responsive during rapid text input?

I ensured the UI remained responsive by displaying the stats using calculations within the app function.  When the state changed, the calcuations were immediately updated.

4. What challenges did you face when implementing the statistics calculations?

The character count was easy to calculate.  It was simply the length of the text.  The word count was calculated using the trim and split methods.  The biggest challenge was displaying the minutes in the 0:00 format.  I changed the reading time variable to a string and then calculated the hours and minutes using Math.floor and modulus operator and converted it to a string using a template literal with the colon.
