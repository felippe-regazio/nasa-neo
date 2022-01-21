# Nasa NEO

This project aims to show Neo (Near Earth Object) from the Official Nasa API.

## Client Stack

- Created with CRA
- TS + Router Added
- Plume CSS for Base Styles
- Styled Components for Custom Style

## Getting started

In the project directory, you can run:

```bash
# Runs the app in the development mode
npm run start
```

```bash
# Launches the test runner in the interactive watch mode
npm test
```

```bash
# Builds the app for production to the `build` folder.\
npm run build
```

## Env

Since it is a simple project, all the environment variables for all modes are in a single .env file on the project root

## Why Context

I decided to use Context API do set the Neo Objects collected from API because:

1. Good opportunity to show some skills with Contexto also

2. Since we are using Router, it could be a multipage application. So, having the Neo data available on a context would avoid prop drilling through different pages that may need the same Neo Data.

## Base Styles

For the application base style the "Plume CSS-Only Microframework" was used.  

Plume's page: https://felippe-regazio.github.io/plume-css/  
Plume's docs and sources: https://github.com/felippe-regazio/plume-css
