# Timezone Converter

This is a React-based application that allows users to compare the current time across multiple timezones. The application supports searching for cities, selecting multiple timezones, and toggling between 12-hour and 24-hour (military) time formats. It also allows toggling the display of minutes.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [Chat Summary](#chat-summary)
- [License](#license)

## Features

- **City-based Timezone Search**: Easily find and select timezones by typing in a city name.
- **Multiple Timezone Support**: Compare the current time in multiple timezones simultaneously.
- **12-Hour and 24-Hour Format Toggle**: Switch between standard and military time formats.
- **Minutes Display Toggle**: Choose whether to display minutes alongside the hour.
- **Daylight Saving Time Awareness**: Time calculations take daylight saving time into account.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/timezone-converter.git
   cd timezone-converter


2. **Install dependencies:**
   ```bash
    npm install
    ```

3. **Start the application:**
    ```bash
    npm start
    ```

## Usage

1. **Select Timezones**: Use the search bar to find and select timezones you want to compare.
2. **Toggle Display Options**: Use the toggles to switch between 12-hour and 24-hour formats, and to show/hide minutes.
3. **Compare Timezones**: View the current time in the selected timezones, with the current hour highlighted.

## Contributing

Contributions are welcome! If you'd like to add new features, improve existing ones, or fix issues, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Credits

This project was developed by ChatGPT, powered by OpenAI. ChatGPT provided guidance, code snippets, and overall structure for the project. Special thanks to ChatGPT for assisting with the development.

## Chat History Summary

Below is a summary of the prompts used during the development of this project, along with the responses provided:

### Prompt 1
**User:** _Show me a site created in React that takes in the current timezone plus an input timezone (a default one if none input) and shows the current time for both places._

**Summary:** I provided a React component that displays the current time in the user's local timezone and an input timezone, with the ability to select a timezone from a dropdown. The time is updated every second, and the component is structured to be easy to integrate into a React application.

### Prompt 2
**User:** _Please make it TS safe: Object literal may only specify known properties, and 'localTime' does not exist in type '(prevState: string) => string'.ts(2353)_

**Summary:** I modified the React component to be TypeScript-safe, introducing appropriate type definitions for the state and ensuring all properties are correctly typed to avoid TypeScript errors.

### Prompt 3
**User:** _Now can we lose the minutes and seconds and just have hours, and have the display be a horizontal 24 section ribbon that has the current hour for both time zones stacked on top of each other with a vertical rectangle covering both timezone ribbons for the current hour._

**Summary:** I updated the component to display only the hours in a horizontal 24-section ribbon for both timezones. The current hour is highlighted with a vertical rectangle across both ribbons, providing a clear visual comparison.

### Prompt 4
**User:** _Can you make it so both ribbons have the current hour right in the center of the frame? Also just have the time be 1am or 6pm and have a toggle to switch to military time and another to toggle that allows minutes to be displayed._

**Summary:** I enhanced the component to center the current hour in both ribbons, display the time in "1am" or "6pm" format, and introduced toggles for switching to military time and for showing/hiding minutes.

### Prompt 5
**User:** _Now please create a new file that contains all the timezones so that any can be selected from and please make sure that daylight savings time is a factor._

**Summary:** I created a new file, `timezones.ts`, that contains a list of all available timezones, and modified the component to handle these timezones, ensuring daylight saving time is correctly accounted for. The dropdown now includes all timezones.

### Prompt 6
**User:** _Is there a better way to find the timezones? For instance, like letting the user type in a city? And can you make it so multiple timezones can be selected?_

**Summary:** I recommended using `react-select` for a more user-friendly way to search for timezones by typing in a city. I also modified the component to allow multiple timezones to be selected and compared simultaneously.

### Prompt 7
**User:** _Type '(selectedOptions: Array<{ label: string; value: string; }>) => void' is not assignable to type '(newValue: MultiValue<{ label: string; value: string; }>, actionMeta: ActionMeta<{ label: string; value: string; }>) => void'. Types of parameters 'selectedOptions' and 'newValue' are incompatible. The type 'MultiValue<{ label: string; value: string; }>' is 'readonly' and cannot be assigned to the mutable type '{ label: string; value: string; }[]'.ts(2322)_

**Summary:** I resolved the TypeScript error by updating the `onChange` handler for `react-select` to properly handle the `MultiValue` type, ensuring compatibility with the `react-select` component's expectations.

### Prompt 8
**User:** _Based on everything you've provided so far, please generate a README.md that I can use for this project. Be sure to take credit for what you've done._

**Summary:** I generated a `README.md` file for your project, detailing the features, installation instructions, usage guidelines, and credits, including acknowledgment of ChatGPT's contributions to the development.

### Prompt 9
**User:** _Please provide all the prompts I used in this chat and provide a summary of what you said back, including this prompt you're reading now. Can you please make it so I can just copy and paste the markdown file?_

**Summary:** I compiled all the prompts and corresponding summaries into a markdown document that you can easily copy and paste.
