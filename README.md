# Ts-vite-googleMaps

## Description
This project is a refactorization of Maximilian Schwarzmüller's Google Maps application demo from his "Understanding TypeScript" course. Originally a vanilla Ts app, I rewrote this app in vite-react and by expressing the API keys as env variables, I ciuld then ensure that these env variables were not exposed in the browser.

## Tags
- React 
- Refactor
- env variables
- typescript
- api keys
- vite
- google maps

## Project Info:
Demo: https://ts-vite-google-maps.vercel.app
Repo: https://github.com/Gold240sx/Ts-vite-googleMaps

## To get started on development:

### 1. create a ".env.dev        "    file in the root directory and add the following:
```
    VITE_GOOGLE_API_KEY=YOUR_API_KEY
```