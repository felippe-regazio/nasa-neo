# Nasa NEO

This project aims to show Neo (Near Earth Object) from the Official Nasa API.

## Client Stack

- Created with CRA
- TS + Router Added
- Plume CSS for Base Styles
- Styled Components for Custom Style

## Setup

If you dont have a Nasa's API key, you must please create one. Now:

- Clone this repository
- Run `npm install` on the project folder  
- Copy the `.env.example` > `.env` file
- Set up your Nasa's API key on the `.env` file

You are ready to go.

## Getting started

In the project directory, you can run:

```bash
# Runs the app in the development mode
npm run start
```

```bash
# Launches the test runner in the interactive watch mode
npm run test
```

```bash
# Builds the app for production to the `build` folder.\
npm run build
```

## Test Examples

The app wasnt completely tested, wanst added complex tests as would be need a big mock setup for routing and context,  
since this is a text and not a real app, just a few ones was added to demonstrate some knowledge.  
Test examples can be found on:

- /src/components/NasaNeoWsProvider/component.text.tsx
- /src/components/NeoDataError/component.text.tsx
- /src/request/request.test.tsx
- src/App.test.tsx

Tests can be running by npm scripts:

```
npm run test
```

## Why Context

I decided to use Context API do set the Neo Objects collected from API because:

1. Good opportunity to show some skills with Contexto also

2. Since we are using Router, it could be a multipage application. So, having the Neo data available on a context would avoid prop drilling through different pages that may need the same Neo Data.

## Base Styles

For the application base style the "Plume CSS-Only Microframework" was used.  
The microframework was created by me and can be found at the links below.  
For specific styles or layouting "styled components" were used.  

Plume's page: https://felippe-regazio.github.io/plume-css/  
Plume's docs and sources: https://github.com/felippe-regazio/plume-css
