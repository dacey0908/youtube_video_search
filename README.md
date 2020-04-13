# YouTube Video Search App

This application is based off of Stephen Grider's React Tutorial. This app allows the user to search for videos. The user will receive five videos from YouTube's API for each query they enter.

I found the tutorial very informative, but as my understanding for development began to grow, I decided to challenge myself further and make it my own.

- Generated an access token through the Google Developer Console to make authenticated requests to a third-party API
- Migrated the initial tutorial code from class-based components to hooks
- Refactored the initial tutorial code from semantic ui classes to custom CSS rules
- Used axios in combination with my access token to fetch video results based on a query

<img src="https://user-images.githubusercontent.com/54158919/69559401-e2463c00-0f77-11ea-910b-1db6581cbd2b.png">
## Setup Instructions

1. Clone this repository.
2. Install dependencies with `yarn install`
3. Rename the `.env.example` file to `.env`
4. Enter a YouTube API Key into `.env`
5. Start app with `yarn start`
