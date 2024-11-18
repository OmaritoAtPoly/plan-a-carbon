# Plan A Frontend Coding Challenge

### In order to run, this project, it's necessary just to run YARN START command
## Intro

Plan A helps companies monitor, reduce, and offset their carbon footprint, based on the data
they input about their emissions. Though this gives individual companies visibility on their
own emissions, it doesn't give us a clear idea on our progress on a country level.
This task addresses the other side of the problem; using satellite data to estimate the
amount of GHG emissions in the atmosphere over time to measure our actual impact.

## Install

It's recommended to install `yarn`:

```
npm install --global yarn
```

`npm` is also possible, but you may run into peer dependency issues. You can get around them with the `--legacy-peer-deps` flag.

To run the application, use `yarn install`

## Available Scripts

### `yarn start`

### `yarn test`

### `yarn lint`

## Task

Your task is to create a single page dashboard that shows the Carbon intensity for a selected German federal state over a predefined date range, with the following requirements:

The user should be able to select a German federal state. Please use this API to source the Carbon intensity data: [https://api.co2map.de/docs#/](https://api.co2map.de/docs#/)

Additionally, the following information should be displayed on the page

- Plan A logo (`/src/assets/images`)
- The provided description (`src/App.tsx`)
- The selected federal state
- The start (2019-02-01) and end date (2022-06-15)
- A chart (using the Recharts library)

### Things you NOT have to do

- You do NOT need to create a date selector for the dates, hardcoding the dates is fine
- The chart should have time on the x-axis and emissions on the y-axis

## What we’re looking for

### Coding

- Good TypeScript
- Good knowledge of ES6 functions
- Good components
- A test is a plus but not required

### UX/layout

- Feel free to use any CSS preprocessors
- CSS organisation and best practices
- Responsiveness
- Accessibility (WCAG or BITV)

### General software development best practice

- Architecture
- Coding style
- Scalability
- Readability
- Testing your code

## Output

- Please create a private GitHub repository with your solution and share it with the GitHub users provided by our recruitment team.
- Please replace this README with instructions on how to run your code locally

## Libraries

Please use the following libraries for your solution.

- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [recharts](https://recharts.org/en-US/)
